'use client'
import { useState, useRef } from 'react'

const ITEMS = [
  {
    href: '/funcionalidades/lista-de-compras',
    label: 'Lista de compras',
    desc: 'Organizada por corredor, offline',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    ),
  },
  {
    href: '/funcionalidades/despensa',
    label: 'Despensa',
    desc: 'Sabe o que falta antes de ir ao mercado',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="5" rx="1"/>
        <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9"/>
        <line x1="10" y1="13" x2="14" y2="13"/>
      </svg>
    ),
  },
  {
    href: '/funcionalidades/receitas',
    label: 'Receitas',
    desc: 'Filtra pelo que tem em casa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
  },
  {
    href: '/funcionalidades/cardapio-semanal',
    label: 'Cardápio semanal',
    desc: 'Gera lista de compras automática',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
      </svg>
    ),
  },
]

const MENU_ID = 'nav-features-menu'

export default function NavDropdown() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const menuRef = useRef(null)

  function enter() {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }

  function leave() {
    closeTimer.current = setTimeout(() => setOpen(false), 200)
  }

  function handleTriggerKeyDown(e) {
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(true)
      setTimeout(() => menuRef.current?.querySelector('[role="menuitem"]')?.focus(), 0)
    }
  }

  function handleMenuKeyDown(e) {
    const items = Array.from(menuRef.current?.querySelectorAll('[role="menuitem"]') ?? [])
    const idx = items.indexOf(document.activeElement)
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(idx + 1) % items.length]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(idx - 1 + items.length) % items.length]?.focus()
    }
  }

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      <a
        href="/funcionalidades"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={MENU_ID}
        onKeyDown={handleTriggerKeyDown}
      >
        Funcionalidades
        <svg
          viewBox="0 0 24 24" width="14" height="14" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform .2s',
            transformBox: 'fill-box',
            transformOrigin: 'center',
          }}
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </a>
      <div
        id={MENU_ID}
        ref={menuRef}
        className={`nav-dropdown-menu${open ? ' is-open' : ''}`}
        role="menu"
        onKeyDown={handleMenuKeyDown}
      >
        {ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="nav-dropdown-item" role="menuitem">
            <div className="nav-dropdown-ico" aria-hidden="true">{item.icon}</div>
            <div>
              <div className="nav-dropdown-label">{item.label}</div>
              <div className="nav-dropdown-desc">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
