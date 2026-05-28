// components/Icon.js
// Wrapper para ícones do sprite SVG.
// Uso: <Icon name="cart" size={24} strokeWidth={1.8} />
// strokeWidth padrão: 2.2 para size >= 28, 1.8 para menores.
// SEMPRE use este componente — nunca inline SVG com paths.
export default function Icon({ name, size = 24, strokeWidth, className, style, ...props }) {
  const sw = strokeWidth ?? (size >= 28 ? 2.2 : 1.8)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={{ strokeWidth: sw, ...style }}
      {...props}
    >
      <use href={`#icon-${name}`} />
    </svg>
  )
}

// Para o brand mark (cumbuca), que tem fills fixos — não usa stroke:
export function BrandIcon({ size = 24, className, style, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
      {...props}
    >
      <use href="#icon-brand" />
    </svg>
  )
}

// Trio mark (3 cumbucas) — só usar em ≥80px de largura (hero, splash, posters):
export function BrandTrioIcon({ width = 120, height = 48, className, style, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
      {...props}
    >
      <use href="#icon-brand-trio" />
    </svg>
  )
}
