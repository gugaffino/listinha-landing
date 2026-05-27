'use client'
import { useState, useRef } from 'react'
import Icon from './Icon'

const ITEMS = [
  {
    href: '/funcionalidades/lista-de-compras',
    label: 'Lista de compras',
    desc: 'Organizada por corredor, offline',
    iconName: 'cart',
  },
  {
    href: '/funcionalidades/despensa',
    label: 'Despensa',
    desc: 'Sabe o que falta antes de ir ao mercado',
    iconName: 'archive',
  },
  {
    href: '/funcionalidades/receitas',
    label: 'Receitas',
    desc: 'Filtra pelo que tem em casa',
    iconName: 'book',
  },
  {
    href: '/funcionalidades/cardapio-semanal',
    label: 'Cardápio semanal',
    desc: 'Gera lista de compras automática',
    iconName: 'calendar',
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
        <Icon
          name="chevron-down"
          size={14}
          strokeWidth={2.2}
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform .2s',
            transformBox: 'fill-box',
            transformOrigin: 'center',
          }}
        />
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
            <div className="nav-dropdown-ico" aria-hidden="true">
              <Icon name={item.iconName} size={20} strokeWidth={1.8} />
            </div>
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
