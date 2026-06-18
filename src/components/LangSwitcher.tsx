import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
import type { Lang } from '../types'
import { LANGS } from '../i18n'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
}

export function LangSwitcher({ lang, setLang }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        <Globe size={12} />
        {LANGS[lang]}
        <span style={{ opacity: 0.4, fontSize: 9, lineHeight: 1 }}>▾</span>
      </button>
      {open && (
        <div className="lang-dropdown">
          {(Object.entries(LANGS) as [Lang, string][]).map(([code, label]) => (
            <button
              key={code}
              className={`lang-option${lang === code ? ' sel' : ''}`}
              onClick={() => { setLang(code); setOpen(false) }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
