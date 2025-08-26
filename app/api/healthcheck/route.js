export async function GET() {
  console.log("✅ Healthcheck ping received at", new Date().toISOString());
  return new Response("OK", { status: 200 });
}