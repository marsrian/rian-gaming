"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

const PaginationControls = ({ totalItems }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);
  const per_page = Number(searchParams.get("per_page") ?? 9);

  const totalPages = Math.ceil(totalItems / per_page);
  const MAX_PAGES = 5;

  const startPage = Math.max(1, page - Math.floor(MAX_PAGES / 2));
  const endPage = Math.min(totalPages, startPage + MAX_PAGES - 1);

  // const [canHoverSound, setCanHoverSound] = useState(false);

  // 🎧 Detect desktop hover support
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setCanHoverSound(window.matchMedia("(hover: hover)").matches);
  //   }
  // }, []);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    // playSound("/sounds/beep.mp3");
    router.push(`/gameplay?page=${p}&per_page=${per_page}`);
  };

  // const hoverSound = () => {
  //   if (canHoverSound) playSound("/sounds/hover.mp3");
  // };

  return (
    <div className="mt-12 flex justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2 flex-wrap justify-center"
        >
          {/* Prev */}
          <ArrowButton
            disabled={page === 1}
            onClick={() => goToPage(page - 1)}
            // onHover={hoverSound}
          >
            ‹
          </ArrowButton>

          {/* Left */}
          {startPage > 1 && (
            <>
              <PageButton
                p={1}
                page={page}
                goToPage={goToPage}
                // onHover={hoverSound}
              />
              <span className="px-1 text-emerald-400">…</span>
            </>
          )}

          {/* Middle */}
          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          ).map((p) => (
            <PageButton
              key={p}
              p={p}
              page={page}
              goToPage={goToPage}
              // onHover={hoverSound}
            />
          ))}

          {/* Right */}
          {endPage < totalPages && (
            <>
              <span className="px-1 text-emerald-400">…</span>
              <PageButton
                p={totalPages}
                page={page}
                goToPage={goToPage}
                // onHover={hoverSound}
              />
            </>
          )}

          {/* Next */}
          <ArrowButton
            disabled={page === totalPages}
            onClick={() => goToPage(page + 1)}
            // onHover={hoverSound}
          >
            ›
          </ArrowButton>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* 🔊 Sound */
// const playSound = (src) => {
//   const audio = new Audio(src);
//   audio.volume = 0.4;
//   audio.play();
// };

/* 🎮 Arrow Button (Gamepad Style) */
const ArrowButton = ({
  children,
  disabled,
  onClick,
  //  onHover
}) => (
  <button
    // onMouseEnter={onHover}
    onClick={onClick}
    disabled={disabled}
    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
      transition active:translate-y-[1px]
      ${
        disabled
          ? "bg-gray-400 text-gray-600"
          : "bg-emerald-700 text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.4)] hover:bg-emerald-800"
      }`}
  >
    {children}
  </button>
);

/* 🔢 Page Button (Neon + Gamepad) */
const PageButton = ({ p,
   page,
    goToPage,
    //  onHover
     }) => (
  <motion.button
    // onMouseEnter={onHover}
    whileTap={{ scale: 0.92 }}
    onClick={() => goToPage(p)}
    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
      border transition-all active:translate-y-[1px]
      ${
        p === page
          ? "bg-black text-emerald-400 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"
          : "bg-white text-black border-gray-300 hover:bg-emerald-100 shadow-[inset_0_-2px_0_rgba(0,0,0,0.15)]"
      }`}
  >
    {p}
  </motion.button>
);

export default PaginationControls;
