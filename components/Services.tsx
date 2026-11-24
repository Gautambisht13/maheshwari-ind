import Link from "next/link";
import {
  Flame,
  Gauge,
  Snowflake,
  Factory,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const divisions = [
  {
    title: "Fire Protection & Alarm Systems",
    tag: "Safety & Compliance",
    icon: Flame,
    highlights: [
      "Fire Hydrant & Sprinkler Line Installation",
      "Addressable & Conventional Fire Alarm Setup",
      "Certified Material Supply & Extinguisher Refilling",
    ],
  },
  {
    title: "Boiler & Process Piping",
    tag: "Thermal Utilities",
    icon: Gauge,
    highlights: [
      "Non-IBR Steam & Condensate Boiler Lines",
      "Boiler Feed Water & Recovery Tank Installation",
      "High-Pressure Pipeline Insulation & Testing",
    ],
  },
  {
    title: "Cooling Towers & Chiller Plants",
    tag: "Industrial HVAC",
    icon: Snowflake,
    highlights: [
      "Induced & Natural-Draft Cooling Tower Erection",
      "Air-Cooled & Water-Cooled Chiller Systems",
      "Chilled-Water Circulation & Header Piping",
    ],
  },
  {
    title: "Heavy Structural & Exhaust",
    tag: "Civil & Fabrication",
    icon: Factory,
    highlights: [
      "Self-Supporting MS/SS Industrial Chimneys",
      "Heavy Steel Truss & Industrial Tin Sheds",
      "Turnkey On-Site Erection & Structural Work",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 border-t border-slate-200/80 bg-slate-50/70"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-red-600 text-xs font-bold tracking-widest uppercase block mb-2">
                What We Engineer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Industrial Divisions &amp; Expertise
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              View All 10 Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map((division, index) => (
            <ScrollReveal key={division.title} delay={index * 0.1}>
              <Link
                href="/services"
                className="group block p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-red-300 transition-all duration-300 h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <division.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                    {division.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                  <span>{division.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <ul className="space-y-2.5">
                  {division.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}