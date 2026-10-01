import { NextResponse } from "next/server";
import { listings } from "@/lib/data";
export function GET(req: Request) {
  const type = new URL(req.url).searchParams.get("type");
  return NextResponse.json(type && type !== "All" ? listings.filter((l) => l.type === type) : listings);
}
