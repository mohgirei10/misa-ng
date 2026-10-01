# MISA NG LTD website (Next.js 14, TypeScript, Tailwind)

    npm install
    cp .env.example .env.local   # set ADMIN_KEY and NEXT_PUBLIC_WHATSAPP
    npm run dev                  # http://localhost:3000

Routes: / , /properties , /properties/[id] , /journal , /developers , /invest , /about , /contact , /privacy , /terms , /cookies
API: POST/GET /api/lead (GET needs x-admin-key), GET /api/properties?type= , GET /api/news

Leads are appended to data/leads.ndjson. On Vercel or other read-only hosts, swap that for a database or email service in app/api/lead/route.ts.
Listings and news in lib/data.ts are sample content. Replace them with real entries.
