import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Sprite3DViewerProps = {
  frames: string[];
  width?: number | string;
  height?: number | string;
  /** Auto-rotate ketika idle (halus) */
  autoSpin?: boolean;
  /** Kecepatan auto-rotate (frame per detik) */
  spinFps?: number;
  /** Sensitivitas drag (semakin besar semakin responsif). Default 0.25 */
  dragSensitivity?: number;
  /** Damping smoothing (0..1), lebih besar = lebih cepat mengejar target. Default 0.12 */
  damping?: number;
};

export default function Sprite3DViewer({
  frames,
  width = "100%",
  height = 360,
  autoSpin = true,
  spinFps = 12,
  dragSensitivity = 0.25,
  damping = 0.12,
}: Sprite3DViewerProps) {
  const n = frames.length;
  const [displayIdx, setDisplayIdx] = React.useState(0);

  // smoothing: current mengikuti target secara halus
  const current = React.useRef(0); // indeks pecahan
  const target = React.useRef(0); // indeks yang dituju (pecahan)
  const raf = React.useRef(0);
  const dragging = React.useRef(false);
  const lastX = React.useRef(0);

  // preload
  React.useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  // helper: modulo positif
  const wrap = (v: number) => {
    const m = ((v % n) + n) % n;
    return m;
  };

  // animation loop (selalu hidup saat mount supaya responsif)
  React.useEffect(() => {
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      // auto-spin menambah target secara halus (frame per detik)
      if (autoSpin && !dragging.current && n > 0) {
        target.current += spinFps * dt;
      }

      // smoothing (lerp) dari current ke target
      const diff = target.current - current.current;

      // percepat wrap-around: pilih jarak terdekat via ring
      let delta = diff;
      if (Math.abs(diff) > n / 2) {
        // contoh: dari 0 ke 23 (n=24), lebih dekat lewat kiri (-1) daripada +23
        delta = diff > 0 ? diff - n : diff + n;
      }

      current.current = current.current + delta * damping;

      // update tampilan (dibulatkan ke frame terdekat)
      const rounded = Math.round(current.current);
      const wrapped = wrap(rounded);
      setDisplayIdx(wrapped);

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSpin, spinFps, damping, n]);

  // drag
  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || n === 0) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;

    // konversi piksel → perpindahan frame (pecahan)
    // dragSensitivity mengontrol “seberapa banyak frame per piksel”
    target.current = target.current + dx * dragSensitivity;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  // tombol kiri/kanan: gerakkan target 1 frame (halus karena lerp)
  const next = () => {
    target.current = target.current + 1;
  };
  const prev = () => {
    target.current = target.current - 1;
  };

  // keyboard control
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!n) {
    return (
      <div
        className="grid place-items-center bg-muted/40 text-sm text-muted-foreground rounded-md"
        style={{ width, height }}
      >
        3D preview belum tersedia
      </div>
    );
  }

  return (
    <div
      className="relative select-none touch-none bg-background rounded-lg border overflow-hidden"
      style={{ width, height }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img
        src={frames[displayIdx]}
        alt={`frame-${displayIdx}`}
        className="w-full h-full object-contain"
        draggable={false}
      />

      {/* Controls bar */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 
             flex items-center gap-10 
             bg-black/40 backdrop-blur-md 
             px-4 py-2 rounded-full shadow-lg"
      >
        {/* Tombol kiri */}
        <button
          type="button"
          onClick={prev}
          className="flex items-center justify-center 
               w-14 h-14 rounded-full 
               bg-white/10 text-white 
               transition hover:bg-white/20 hover:scale-110 active:scale-95"
          aria-label="Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Tombol kanan */}
        <button
          type="button"
          onClick={next}
          className="flex items-center justify-center 
               w-14 h-14 rounded-full 
               bg-white/10 text-white 
               transition hover:bg-white/20 hover:scale-110 active:scale-95"
          aria-label="Berikutnya"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* hint (opsional) */}
      {/* <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/40 text-white text-[11px]">
        drag kiri/kanan atau gunakan tombol
      </div> */}
    </div>
  );
}
