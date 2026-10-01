"use client";
import { ReactNode } from "react";
import { openLead } from "@/lib/lead";
export default function LeadButton({ type, className = "btn-solid", children }: { type: string; className?: string; children: ReactNode }) {
  return <button onClick={() => openLead(type)} className={className}>{children}</button>;
}
