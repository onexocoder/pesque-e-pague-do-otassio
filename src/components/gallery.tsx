"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery, type GalleryImage } from "@/content/gallery";
import { Media } from "./media";
export function Gallery({ images = gallery }: { images?: GalleryImage[] }) {
  const ordered = [...images].sort((a, b) => a.order - b.order);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus();
  };
  useEffect(() => {
    if (selected === null) return;
    dialog.current?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [selected]);
  if (!ordered.length)
    return <p>As fotografias do espaço serão publicadas em breve.</p>;
  const active = selected === null ? null : ordered[selected];
  return (
    <>
      <div className="gallery-grid">
        {ordered.map((item, index) => (
          <button
            className="gallery-item"
            key={item.id}
            onClick={(e) => {
              opener.current = e.currentTarget;
              setSelected(index);
            }}
            aria-label={`Ampliar: ${item.caption}${item.isDemo ? " (imagem de referência)" : ""}`}
          >
            <Media src={item.src} alt={item.alt} demo={item.isDemo} />
            <span>
              {item.caption}
              <span aria-hidden="true">＋</span>
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Galeria de imagens"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            setSelected((i) => (i === null ? null : (i + 1) % ordered.length));
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            setSelected((i) =>
              i === null ? null : (i + ordered.length - 1) % ordered.length,
            );
          }
        }}
      >
        {active && (
          <div className="lightbox-inner">
            <button className="lightbox-close" onClick={close} autoFocus>
              Fechar ×
            </button>
            <div className="lightbox-image">
              <Image key={active.id} src={active.src} alt={active.alt} fill sizes="90vw" loading="eager" />
            </div>
            <p aria-live="polite">
              {active.caption}
              {active.isDemo
                ? " · Imagem de referência, não retrata o local"
                : ""}
            </p>
            <div className="lightbox-controls">
              <button
                onClick={() =>
                  setSelected((i) =>
                    i === null
                      ? null
                      : (i + ordered.length - 1) % ordered.length,
                  )
                }
              >
                Anterior
              </button>
              <span>
                {(selected ?? 0) + 1} / {ordered.length}
              </span>
              <button
                onClick={() =>
                  setSelected((i) =>
                    i === null ? null : (i + 1) % ordered.length,
                  )
                }
              >
                Próxima
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
