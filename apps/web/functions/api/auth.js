export async function onRequestGet(context) {
  const { env, request } = context;
  const clientId = env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response(
      'Missing GITHUB_CLIENT_ID in Cloudflare Pages environment variables. Please add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in Cloudflare Pages Settings -> Environment Variables, or use a GitHub Personal Access Token to sign in directly.',
      { status: 500, headers: { 'Content-Type': 'text/plain' } }
    );
  }

  const url = new URL(request.url);
  const redirectUri = `${url.origin}/api/callback`;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

  return Response.redirect(githubAuthUrl, 302);
}
