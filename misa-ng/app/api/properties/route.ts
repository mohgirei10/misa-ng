import { properties } from '@/lib/data';
export function GET(req: Request) {
  const t = new URL(req.url).searchParams.get('type');
  return Response.json(t ? properties.filter((p) => p.type === t) : properties);
}
