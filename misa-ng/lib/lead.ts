export const openLead = (type: string) => window.dispatchEvent(new CustomEvent("misa:lead", { detail: type }));
export async function sendLead(data: Record<string, string>) {
  const r = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error ?? "Could not send. Try again.");
}
