"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { coverStyle } from "@/lib/gradients";

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl text-left"
            aria-label={`Open image ${i + 1} of ${title} in lightbox`}
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={coverStyle(img)}
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              View
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Image ${open + 1} of ${title}`}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0" style={coverStyle(images[open])} />
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl text-white backdrop-blur-sm hover:bg-accent"
                aria-label="Close lightbox"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                {open + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
