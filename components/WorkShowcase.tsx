import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const portfolioItems = [
  {
    id: 1,
    type: "image",
    title: "Precision Manufacturing",
    category: "Industrial",
    src: "/img1.jpg",
  },
  {
    id: 2,
    type: "video",
    title: "Automated Assembly Line",
    category: "Infrastructure",
    src: "/vid1.mp4",
  },
  {
    id: 3,
    type: "image",
    title: "Server Deployment",
    category: "Digital Solutions",
    src: "/img2.jpg",
  },
  {
    id: 4,
    type: "image",
    title: "Smart Factory Dashboard",
    category: "Software",
    src: "/img3.jpg",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Work</h2>
            <p className="text-zinc-400 font-light max-w-xl">
              A glimpse into the digital and industrial solutions we have engineered for our clients.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.1}>
            <div className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80">
              
              {/* Media Renderer */}
              {item.type === "image" && item.src ? (
                <Image
                  src={item.src}
                  alt={item.title || "Work showcase image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : item.type === "video" && item.src ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : null}

              {/* Dark Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-xl font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
              </div>
              
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}