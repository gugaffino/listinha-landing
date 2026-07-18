'use client'
import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import Icon from './Icon'
import { Link } from '../i18n/navigation'

const ITEM_DEFS = [
  { href: '/funcionalidades/lista-de-compras', key: 'lista', iconName: 'cart' },
  { href: '/funcionalidades/despensa', key: 'despensa', iconName: 'archive' },
  { href: '/funcionalidades/receitas', key: 'receitas', iconName: 'book' },
  { href: '/funcionalidades/cardapio-semanal', key: 'cardapio', iconName: 'calendar' },
]

const MENU_ID = 'nav-features-menu'

export default function NavDropdown() {
  const t = useTranslations('nav')
  const ITEMS = ITEM_DEFS.map((d) => ({
    href: d.href,
    iconName: d.iconName,
    label: t(`dropdown.${d.key}.label`),
    desc: t(`dropdown.${d.key}.desc`),
  }))
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
      <Link
        href="/funcionalidades"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={MENU_ID}
        onKeyDown={handleTriggerKeyDown}
      >
        {t('features')}
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
      </Link>
      <div
        id={MENU_ID}
        ref={menuRef}
        className={`nav-dropdown-menu${open ? ' is-open' : ''}`}
        role="menu"
        onKeyDown={handleMenuKeyDown}
      >
        {ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="nav-dropdown-item" role="menuitem">
            <div className="nav-dropdown-ico" aria-hidden="true">
              <Icon name={item.iconName} size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div className="nav-dropdown-label">{item.label}</div>
              <div className="nav-dropdown-desc">{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
