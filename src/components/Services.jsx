import { useRevealAll } from '../hooks/useReveal';

const services = [
  {
    num: 1, name: '스코 스탠다드', desc: '온라인 관리형 독서실',
    icon: 'solar:library-bold', color: '#6c5ce7',
    gradient: 'linear-gradient(135deg, #f0eeff 0%, #e8e4ff 100%)',
    features: ['출결 관리', '순공시간 체크', '실시간 모니터링'],
  },
  {
    num: 2, name: '스코 스파르타', desc: '온라인 스파르타 관리형 독서실',
    icon: 'solar:fire-bold', color: '#e17055',
    gradient: 'linear-gradient(135deg, #ffeee8 0%, #ffddd2 100%)',
    features: ['강화 출결관리', '학습량 점검', '일일 보고'],
  },
  {
    num: 3, name: '스코 블랙', desc: '온라인 관리형 학원',
    icon: 'solar:square-academic-cap-bold', color: '#1a1a2e',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d2b3d 100%)',
    dark: true,
    features: ['맞춤 커리큘럼', '성취율 관리', '학습 코칭'],
  },
  {
    num: 4, name: '스코 프리미엄', desc: '온라인 스파르타 관리형 학원',
    icon: 'solar:crown-bold', color: '#d4a017',
    gradient: 'linear-gradient(135deg, #fef9e8 0%, #fdf0c8 100%)',
    tag: '인기',
    features: ['전담 튜터', '주간 코칭', '학부모 리포트'],
  },
  {
    num: 5, name: '스코 프리미엄 플러스', desc: '온라인 학습코칭 센터',
    icon: 'solar:star-bold', color: '#4a6cf7',
    gradient: 'linear-gradient(135deg, #eef2ff 0%, #e4ecff 100%)',
    tag: '최상위',
    features: ['1:1 전담 코칭', '학습 전략 설계', '내신 완전관리'],
  },
];

export default function Services() {
  const containerRef = useRevealAll();

  return (
    <section id="programs" style={{ padding: '120px 0', background: 'var(--color-bg-soft)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }} ref={containerRef}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <span style={{
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em',
            color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '12px', display: 'block',
          }}>
            SB학습관리
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 700, lineHeight: 1.2,
            color: 'var(--color-text)', letterSpacing: '-0.02em',
          }}>
            학습습관 형성을 위한 맞춤 프로그램
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginTop: '12px', whiteSpace: 'nowrap' }}>
            5가지 프로그램 중 자녀에게 맞는 학습관리를 선택하세요.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {services.slice(0, 3).map((s, i) => (
            <div key={s.num} className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: '#fff', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-light)', overflow: 'hidden',
                transition: 'all 0.3s ease', cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = (s.dark ? '#555' : s.color + '50'); e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 48px ${s.dark ? 'rgba(0,0,0,0.15)' : s.color + '12'}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Visual top area */}
              <div style={{
                background: s.gradient, padding: '28px 24px 24px',
                position: 'relative', minHeight: '140px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute', top: '12px', right: '12px', width: '40px', height: '40px',
                  borderRadius: '50%', background: s.dark ? 'rgba(255,255,255,0.06)' : `${s.color}08`,
                }}></div>
                <div style={{
                  position: 'absolute', bottom: '16px', left: '16px', width: '24px', height: '24px',
                  borderRadius: '50%', background: s.dark ? 'rgba(255,255,255,0.04)' : `${s.color}06`,
                }}></div>
                {/* Tier number */}
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em',
                  color: s.dark ? 'rgba(255,255,255,0.4)' : `${s.color}80`,
                }}>TIER {s.num}</div>
                {/* Icon */}
                <div style={{
                  width: '68px', height: '68px', borderRadius: '22px',
                  background: s.dark ? 'rgba(255,255,255,0.1)' : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: s.dark ? 'none' : '0 4px 20px rgba(0,0,0,0.06)',
                }}>
                  <iconify-icon icon={s.icon} style={{ fontSize: '30px', color: s.dark ? '#fff' : s.color }}></iconify-icon>
                </div>
              </div>
              {/* Info bottom */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
                  color: 'var(--color-text)', marginBottom: '4px',
                }}>{s.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-tertiary)', marginBottom: '16px' }}>{s.desc}</p>
                {/* Feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {s.features.map((f) => (
                    <span key={f} style={{
                      padding: '4px 10px', borderRadius: 'var(--radius-full)',
                      background: 'var(--color-bg-soft)', fontSize: '11px', fontWeight: 500,
                      color: 'var(--color-text-secondary)',
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards — wider, horizontal layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {services.slice(3).map((s, i) => (
            <div key={s.num} className={`reveal reveal-delay-${i + 4}`}
              style={{
                background: '#fff', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-light)', overflow: 'hidden',
                transition: 'all 0.3s ease', cursor: 'default',
                position: 'relative',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color + '50'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 48px ${s.color}12`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Tag */}
              {s.tag && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px', zIndex: 2,
                  padding: '4px 12px', borderRadius: 'var(--radius-full)',
                  background: s.color, color: '#fff',
                  fontSize: '11px', fontWeight: 700, letterSpacing: '0.02em',
                }}>{s.tag}</div>
              )}
              <div style={{ display: 'flex', alignItems: 'stretch' }}>
                {/* Visual left area */}
                <div style={{
                  background: s.gradient, padding: '32px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  minWidth: '150px', position: 'relative',
                }}>
                  {/* Decorative */}
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em',
                    color: `${s.color}80`,
                  }}>TIER {s.num}</div>
                  <div style={{
                    width: '68px', height: '68px', borderRadius: '22px',
                    background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  }}>
                    <iconify-icon icon={s.icon} style={{ fontSize: '30px', color: s.color }}></iconify-icon>
                  </div>
                </div>
                {/* Info right */}
                <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
                    color: 'var(--color-text)', marginBottom: '4px',
                  }}>{s.name}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-tertiary)', marginBottom: '14px' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {s.features.map((f) => (
                      <span key={f} style={{
                        padding: '4px 10px', borderRadius: 'var(--radius-full)',
                        background: 'var(--color-bg-soft)', fontSize: '11px', fontWeight: 500,
                        color: 'var(--color-text-secondary)',
                      }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Tier progression visual */}
        <div className="reveal reveal-delay-5" style={{
          marginTop: '32px', padding: '28px 32px',
          background: '#fff', borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-light)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
              <iconify-icon icon="solar:arrow-right-up-linear" style={{ fontSize: '14px', marginRight: '6px', color: 'var(--color-accent)' }}></iconify-icon>
              프로그램 단계별 비교
            </span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>TIER 1 → TIER 5</span>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Track */}
            <div style={{
              height: '4px', borderRadius: '2px',
              background: 'linear-gradient(90deg, #6c5ce7, #e17055, #1a1a2e, #d4a017, #4a6cf7)',
              marginBottom: '12px',
            }}></div>
            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {services.map((s) => (
                <div key={s.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: s.dark ? '#1a1a2e' : `${s.color}15`,
                    border: `2px solid ${s.dark ? '#1a1a2e' : s.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <iconify-icon icon={s.icon} style={{ fontSize: '13px', color: s.dark ? '#fff' : s.color }}></iconify-icon>
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: 600,
                    color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap',
                  }}>{s.name.replace('스코 ', '')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
