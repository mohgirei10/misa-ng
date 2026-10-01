import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || !String(b.name ?? "").trim() || !/^\S+@\S+\.\S+$/.test(String(b.email ?? "")))
    return NextResponse.json({ error: "Enter your name and a valid email address." }, { status: 400 });
  const file = path.join(process.cwd(), "data", "leads.json");
  const all = JSON.parse(await fs.readFile(file, "utf8").catch(() => "[]"));
  all.push({ ...b, id: crypto.randomUUID(), at: new Date().toISOString() });
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(all, null, 2));
  return NextResponse.json({ ok: true });
}
