export async function onRequestGet(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing authorization code parameter.', { status: 400 });
  }

  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response(
      'Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET in Cloudflare Pages environment variables.',
      { status: 500 }
    );
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Cloudflare-Pages-OAuth',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const tokenData = await tokenRes.json();
    const token = tokenData.access_token;

    if (!token) {
      return new Response(
        'Failed to obtain access token from GitHub: ' + JSON.stringify(tokenData),
        { status: 401 }
      );
    }

    const payload = JSON.stringify({ token, provider: 'github' });
    const content = `<!DOCTYPE html>
<html>
<head><title>Authorizing...</title></head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:success:' + ${JSON.stringify(payload)},
          e.origin
        );
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`;

    return new Response(content, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  } catch (err) {
    return new Response('OAuth error: ' + err.message, { status: 500 });
  }
}
