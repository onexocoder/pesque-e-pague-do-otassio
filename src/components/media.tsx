import Image from "next/image";
export function Media({
  src,
  alt,
  demo = false,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 65vw",
}: {
  src: string;
  alt: string;
  demo?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={`media ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        quality={80}
      />
      {demo && (
        <figcaption>Imagem de referência · não retrata o local</figcaption>
      )}
    </figure>
  );
}
