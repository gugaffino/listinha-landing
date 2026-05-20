'use client'
import { useState } from 'react'

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // fallback: select all text in copy-box
    }
  }

  return (
    <button className="btn btn-ghost btn-sm" onClick={handleCopy} type="button">
      {copied ? 'Copiado' : 'Copiar lista'}
    </button>
  )
}
