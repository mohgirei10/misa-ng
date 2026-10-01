import { news } from '@/lib/data';
export function GET() { return Response.json(news); }
