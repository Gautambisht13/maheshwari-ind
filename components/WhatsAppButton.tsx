"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  // Replace with your actual WhatsApp business number (country code + number, no '+' or spaces)
  const phoneNumber = "91+ 7017389787";
  const message =
    "Hello Maheshwar Industries, I would like to inquire about your services / request a quote.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Maheshwar Industries on WhatsApp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 bg-[#25D366] text-zinc-950 font-semibold px-4 py-3.5 rounded-full shadow-xl shadow-emerald-950/50 hover:bg-[#22c35e] transition-colors"
      >
        {/* Expanding Pulse Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6 text-white relative z-10 shrink-0"
        >
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.458 1.71 6.398L3.2 28.8l6.584-1.726A12.74 12.74 0 0 0 16.004 28.8c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.434c-1.914 0-3.79-.514-5.426-1.486l-.39-.232-3.908 1.024 1.044-3.81-.254-.404a10.617 10.617 0 0 1-1.632-5.726c0-5.864 4.772-10.634 10.636-10.634 5.864 0 10.634 4.77 10.634 10.634 0 5.864-4.77 10.634-10.704 10.634zm5.834-7.968c-.32-.16-1.892-.934-2.186-1.04-.294-.108-.508-.16-.72.16-.214.32-.826 1.04-1.014 1.254-.186.214-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.494.14-.654.144-.144.32-.374.48-.56.16-.186.214-.32.32-.534.106-.214.054-.4-.026-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.614-.01c-.214 0-.56.08-.854.4-.294.32-1.12 1.094-1.12 2.668s1.146 3.094 1.306 3.308c.16.214 2.256 3.444 5.466 4.83.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.126.614-.092 1.892-.774 2.16-1.52.266-.746.266-1.386.186-1.52-.08-.134-.294-.214-.614-.374z" />
        </svg>

        {/* Expandable Label on Hover (Desktop) */}
        <span className="hidden sm:inline-block relative z-10 text-sm text-white font-semibold pr-1">
          Chat with Us
        </span>
      </motion.a>
    </motion.div>
  );
}