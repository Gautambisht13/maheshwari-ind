"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "Dixon Technologies", logo: "/clients/img5.jpg" },
  { name: "Sharon Bio-Medicine Ltd.", logo: "/clients/img6.jpg" },
  { name: "HAB Pharmaceuticals & Research Ltd.", logo: "/clients/img7.jpg" },
  { name: "Coral Laboratories & Research Ltd.", logo: "/clients/img8.jpg" },
  { name: "Balmer lawrie- van leer Ltd.", logo: "/clients/img9.jpg" },
  { name: "Hype pvt Ltd.", logo: "/clients/img10.png" },
  { name: "Premier nutraceuticals pvt ltd", logo: "/clients/img11.webp" },
  { name: "Hema Labs", logo: "/clients/img12.png" },
  { name: "Oasis laboratoris pvt ltd", logo: "/clients/img13.jpg" },
  { name: "Rydburg pharmaceuticals ltd", logo: "/clients/img14.jpg" },
  { name: "EPACK DURABLE LTD", logo: "/clients/img15.png"},
  { name: "Numero uno clothing ltd", logo: "/clients/img16.jpg"},
];

export default function ClientMarquee() {
  // Repeating the 3 logos 4 times per track ensures the row stays wider than any desktop screen
  const trackItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-20 border-t border-zinc-900 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <ScrollReveal>
          <span className="text-red-600 text-xs font-semibold tracking-widest uppercase block mb-2">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
            Our Esteemed Clients
          </h2>
        </ScrollReveal>
      </div>

      {/* Marquee Wrapper with Left & Right Edge Fade Mask */}
      <div
        className="relative w-full overflow-hidden flex"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        {/* Seamless Right-to-Left Infinite Loop */}
        <motion.div
          className="flex items-center gap-6 shrink-0 pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 150, // Adjust speed: lower = faster, higher = slower
          }}
        >
          {[...trackItems, ...trackItems].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex flex-col items-center justify-center w-60 h-32 px-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-400/50 hover:bg-zinc-900 transition-all duration-300 shrink-0"
            >
              {/* Clean White Pill Container for JPG Logos */}
              <div className="relative w-44 h-16 bg-white rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  sizes="176px"
                />
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-zinc-200 mt-3 truncate max-w-full font-medium transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}