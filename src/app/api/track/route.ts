export async function GET() {
  try {
    const resp = await fetch("https://recenttrack.vercel.app/api/handler");

    if (!resp.ok) {
      throw new Error(`Upstream request failed with status ${resp.status}`);
    }

    const data = await resp.json();

    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch recent track:", error);
    return Response.json(
      { error: "Failed to fetch recent track" },
      { status: 500 },
    );
  }
}
