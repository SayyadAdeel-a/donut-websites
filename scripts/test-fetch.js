async function test() {
  const res = await fetch('https://donutland.webflow.io/homepages/home-02');
  const text = await res.text();
  console.log('Status:', res.status);
  console.log('Length:', text.length);
  console.log('Has page-wrapper:', text.includes('page-wrapper'));
}
test();
