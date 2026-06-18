import { useState } from 'react'
import type { Lang, Translations } from '../types'
import { I18N } from '../i18n'

export function useLang(): [Lang, (l: Lang) => void, Translations] {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('ap_lang')
      if (stored === 'en' || stored === 'uk' || stored === 'ru') return stored
    } catch { /* ignore */ }
    return 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('ap_lang', l) } catch { /* ignore */ }
  }

  const t = I18N[lang]
  return [lang, setLang, t]
}
