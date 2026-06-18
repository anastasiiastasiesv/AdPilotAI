import type { Translations } from '../types'

interface Props { t: Translations }

export function Marquee({ t }: Props) {
  const items = t.marqueeItems
  return (
    <div style={{ overflow: 'hidden', padding: '26px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0A0A0E', position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 88, background: 'linear-gradient(to right,#0A0A0E,transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 88, background: 'linear-gradient(to left,#0A0A0E,transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', animation: 'marqueeScroll 32s linear infinite', width: 'max-content' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 11, padding: '0 26px', color: 'rgba(255,255,255,0.28)', fontSize: 13, whiteSpace: 'nowrap' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#7C3AED', flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
