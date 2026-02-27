export async function onRequestGet(context) {
  console.log(JSON.stringify({
    event: "cta_clicked",
    page: context.request.headers.get("Referer"),
    ip: context.request.headers.get("CF-Connecting-IP"),
    ua: context.request.headers.get("User-Agent"),
    time: new Date().toISOString()
  }));

  return Response.redirect(
    "https://www.wealthsimple.com/invite/NBLGYA",
    302
  );
}
