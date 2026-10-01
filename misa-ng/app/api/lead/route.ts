import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
const FILE = path.join(process.cwd(), 'data', 'leads.ndjson');

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || typeof b.type !== 'string' || !/^\S+@\S+\.\S+$/.test(String(b.email || ''))) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }
  const clean = Object.fromEntries(Object.entries(b).filter(([, v]) => typeof v === 'string').map(([k, v]) => [k, (v as string).slice(0, 2000)]));
  const rec = { id: crypto.randomUUID(), at: new Date().toISOString(), ...clean };
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.appendFile(FILE, JSON.stringify(rec) + '\n');
  return NextResponse.json({ ok: true, id: rec.id });
}

export async function GET(req: Request) {
  if (!process.env.ADMIN_KEY || req.headers.get('x-admin-key') !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const t = await fs.readFile(FILE, 'utf8').catch(() => '');
  return NextResponse.json(t.split('\n').filter(Boolean).map((l) => JSON.parse(l)));
}
