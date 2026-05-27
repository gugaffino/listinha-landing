// components/IconSprite.js
// Sprite SVG com todos os ícones do projeto.
// Renderizado uma vez no layout; referenciado por <Icon> com <use href="#icon-X">.
// Para adicionar ícone: copiar paths do Lucide (stroke 1.8, sem fill nos shapes).
export default function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
      <defs>

        {/* ── Marca Mise (cumbuca) ── */}
        <symbol id="icon-brand" viewBox="0 0 24 24">
          <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="currentColor" stroke="none"/>
          <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A" stroke="none"/>
        </symbol>

        {/* ── Marca Mise (trio — 3 cumbucas, só em ≥80px de largura) ── */}
        <symbol id="icon-brand-trio" viewBox="0 0 60 24">
          <path d="M 1 11.5 L 17 11.5 Q 17 20.5 9 20.5 Q 1 20.5 1 11.5 Z" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="5" r="2" fill="#B8E89A" stroke="none"/>
          <path d="M 22 11.5 L 38 11.5 Q 38 20.5 30 20.5 Q 22 20.5 22 11.5 Z" fill="currentColor" stroke="none"/>
          <circle cx="30" cy="5" r="2" fill="#B8E89A" stroke="none"/>
          <path d="M 43 11.5 L 59 11.5 Q 59 20.5 51 20.5 Q 43 20.5 43 11.5 Z" fill="currentColor" stroke="none"/>
          <circle cx="51" cy="5" r="2" fill="#B8E89A" stroke="none"/>
        </symbol>

        {/* ── Navegação e UI ── */}
        <symbol id="icon-arrow-right" viewBox="0 0 24 24">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </symbol>
        <symbol id="icon-chevron-down" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6"/>
        </symbol>
        <symbol id="icon-check" viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5"/>
        </symbol>
        <symbol id="icon-check-lg" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"/>
        </symbol>
        <symbol id="icon-plus" viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </symbol>
        <symbol id="icon-search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </symbol>

        {/* ── Features principais ── */}
        <symbol id="icon-cart" viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </symbol>
        <symbol id="icon-archive" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="5" rx="1"/>
          <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9"/>
          <line x1="10" y1="13" x2="14" y2="13"/>
        </symbol>
        <symbol id="icon-book" viewBox="0 0 24 24">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </symbol>
        <symbol id="icon-calendar" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
        </symbol>

        {/* ── Funcionalidades específicas ── */}
        <symbol id="icon-share" viewBox="0 0 24 24">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </symbol>
        <symbol id="icon-phone" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.8a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </symbol>
        <symbol id="icon-map" viewBox="0 0 24 24">
          <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/>
          <path d="M8 2v16"/>
          <path d="M16 6v16"/>
        </symbol>
        <symbol id="icon-alert" viewBox="0 0 24 24">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </symbol>
        <symbol id="icon-package" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        </symbol>
        <symbol id="icon-activity" viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </symbol>
        <symbol id="icon-arrows-expand" viewBox="0 0 24 24">
          <polyline points="16 3 21 3 21 8"/>
          <line x1="4" y1="20" x2="21" y2="3"/>
          <polyline points="21 16 21 21 16 21"/>
          <line x1="15" y1="15" x2="21" y2="21"/>
        </symbol>

      </defs>
    </svg>
  )
}
