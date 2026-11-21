import { useState } from "react";

type ResponsiveArtProps = {
  desktopSrc?: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
};

/** Local-first responsive image. Missing files fail quietly so CSS fallback art remains visible. */
export default function ResponsiveArt({ desktopSrc, mobileSrc, alt, className = "" }: ResponsiveArtProps) {
  const [failed, setFailed] = useState(false);
  if (!desktopSrc || failed) return null;
  return (
    <picture className={`responsive-art ${className}`}>
      {mobileSrc && <source media="(max-width: 760px)" srcSet={mobileSrc} />}
      <img src={desktopSrc} alt={alt} onError={() => setFailed(true)} loading="eager" />
    </picture>
  );
}
