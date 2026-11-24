import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 text-center overflow-hidden bg-white">
      {/* Subtle Radial Red Tint */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[240px] bg-red-500/5 blur-[100px] rounded-full" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs font-semibold tracking-wider uppercase text-red-700 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Turnkey Industrial &amp; Fire Safety Engineering</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
            Engineering industrial safety &amp;{" "}
            <span className="text-red-600">utility infrastructure</span> at scale.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Maheshwar Industries delivers end-to-end fire hydrant lines, alarm systems, Non-IBR boiler piping, cooling towers, and heavy structural installations built for zero-downtime operations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-slate-300 bg-white px-7 py-3.5 rounded-full font-semibold hover:bg-slate-50 hover:border-red-300 transition-all text-slate-800"
            >
              Explore All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}