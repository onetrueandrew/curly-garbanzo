export async function onRequestPost(context) {
  const req = context.request;

  let data = {};
  try { data = await req.json(); } catch {}

  console.log(JSON.stringify({
    event: data.event || "unknown",
    page: req.headers.get("Referer"),
    ip: req.headers.get("CF-Connecting-IP"),
    ua: req.headers.get("User-Agent"),
    time: new Date().toISOString()
  }));

  return new Response("ok", { status: 200 });
}
