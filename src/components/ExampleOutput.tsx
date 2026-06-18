import type { ExampleItem, ExampleOutputData } from '../types'

const C = {
  textSecondary: '#70708A',
}

interface Props {
  ex: ExampleItem
}

export function ExampleOutput({ ex }: Props) {
  const o: ExampleOutputData = ex.output

  if (o.type === 'numbered') return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{o.title}</div>
      {o.items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 14, padding: '11px 0', borderBottom: i < o.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          <span style={{ color: 'rgba(167,139,250,0.45)', fontSize: 11, fontWeight: 600, minWidth: 22, paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
          <span style={{ color: '#C8C8D8', fontSize: 14, lineHeight: 1.65 }}>{item}</span>
        </div>
      ))}
    </div>
  )

  if (o.type === 'script') return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{o.title}</div>
      {o.scenes.map((s, i) => (
        <div key={i} style={{ padding: '14px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 10 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 9 }}>
            <span style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: 6, padding: '2px 9px', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: '#A78BFA' }}>{s.label}</span>
            <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: 11 }}>{s.time}</span>
          </div>
          <p style={{ color: '#E0E0F0', fontSize: 14, lineHeight: 1.62, marginBottom: 7, fontStyle: 'italic' }}>{s.text}</p>
          <p style={{ color: C.textSecondary, fontSize: 12, lineHeight: 1.5, margin: 0 }}>↳ {s.note}</p>
        </div>
      ))}
    </div>
  )

  if (o.type === 'campaign') return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{o.title}</div>
      {o.items.map((item, i) => (
        <div key={i} style={{ padding: '14px 0', borderBottom: i < o.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          <div style={{ color: '#A78BFA', fontSize: 11, fontWeight: 600, marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.label}</div>
          <div style={{ color: '#C8C8D8', fontSize: 14, lineHeight: 1.65 }}>{item.text}</div>
        </div>
      ))}
    </div>
  )

  if (o.type === 'prompts') return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{o.title}</div>
      {o.items.map((item, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '14px', marginBottom: 10 }}>
          <span style={{ background: '#1A1730', border: '1px solid rgba(124,58,237,0.28)', borderRadius: 6, padding: '2px 9px', fontSize: 10, fontWeight: 700, color: '#A78BFA', letterSpacing: '0.06em', display: 'inline-block', marginBottom: 10 }}>{item.tool}</span>
          <code style={{ color: '#C0C0D8', fontSize: 12, lineHeight: 1.72, fontFamily: "'SF Mono','Fira Code',monospace", display: 'block', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{item.text}</code>
        </div>
      ))}
    </div>
  )

  if (o.type === 'plan') return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{o.title}</div>
      {o.weeks.map((week, wi) => (
        <div key={wi} style={{ marginBottom: 22 }}>
          <div style={{ color: '#A78BFA', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 12, textTransform: 'uppercase' }}>{week.label}</div>
          {week.days.map((d, di) => (
            <div key={di} style={{ display: 'grid', gridTemplateColumns: '40px 88px 1fr', gap: 12, padding: '11px 0', borderBottom: di < week.days.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'start' }}>
              <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12, paddingTop: 1 }}>{d.day}</span>
              <span style={{ color: '#A78BFA', fontSize: 11, fontWeight: 500, paddingTop: 1 }}>{d.format}</span>
              <span style={{ color: '#C8C8D8', fontSize: 13, lineHeight: 1.62 }}>{d.idea}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  return null
}
