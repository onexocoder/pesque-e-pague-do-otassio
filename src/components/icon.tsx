export function Icon({
  name = "wave",
  className = "",
}: {
  name?: string;
  className?: string;
}) {
  const paths: Record<string, string> = {
    wave: "M2 10c4-6 6 6 10 0s6 6 10 0M2 16c4-6 6 6 10 0s6 6 10 0",
    fire: "M12 2c2 6 7 7 7 13a7 7 0 0 1-14 0c0-3 2-6 4-8 0 4 1 5 2 5 2-3 1-6 1-10Z",
    pool: "M19 5 5 19M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    plate: "M3 3v6c0 4 4 4 4 0V3M5 3v19M18 22V3c-6 3-6 10 0 10",
    glass: "M5 3h14l-2 9a5 5 0 0 1-10 0ZM12 17v5M8 22h8",
    ice: "M7 12 12 23 17 12ZM5 12h14V9a7 7 0 0 0-14 0Z",
    parking: "M8 22V2h5a6 6 0 0 1 0 12H8",
    pin: "M12 22S4 14 4 9a8 8 0 1 1 16 0c0 5-8 13-8 13ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    sun: "M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z",
  };
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.wave} />
    </svg>
  );
}
