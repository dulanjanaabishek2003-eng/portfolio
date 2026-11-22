import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function StackStrip() {
  const { stackStrip } = portfolioData;

  return (
    <div className="stack-strip border-y border-[#1e293b] bg-[#0c1426] py-[22px] overflow-hidden">
      <div className="wrap flex items-center justify-between gap-6 text-[14px] text-[#94a3b8] flex-wrap">
        <span className="strip-label text-[11px] tracking-[0.15em] text-[#64748b] font-bold uppercase">
          IDEAS BUILT WITH
        </span>
        {stackStrip.map((item, index) => (
          <span
            key={index}
            className="hover:text-[#38bdf8] transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
