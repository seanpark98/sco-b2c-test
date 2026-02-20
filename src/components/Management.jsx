import { useRevealAll } from '../hooks/useReveal';

const categories = [
  {
    title: '생활 관리',
    icon: 'solar:home-bold',
    color: '#6c5ce7',
    gradient: 'linear-gradient(135deg, #f0eeff 0%, #e8e4ff 100%)',
    items: ['출결 및 외출 관리', '실시간 모니터링', '순공 시간 관리', '주의장 관리', '쉬는 시간/수면 관리', '무단 이탈 관리'],
  },
  {
    title: '계획 및 코칭',
    icon: 'solar:clipboard-bold',
    color: '#4a6cf7',
    gradient: 'linear-gradient(135deg, #eef2ff 0%, #e4ecff 100%)',
    items: ['정규 학습 계획 관리', '덜한 학습 관리', '일일 학습 계획 관리', '코칭 (주 1회)'],
  },
  {
    title: '성취 관리',
    icon: 'solar:graph-up-bold',
    color: '#00b894',
    gradient: 'linear-gradient(135deg, #e8faf3 0%, #d4f5e8 100%)',
    items: ['일일 계획 성취율 관리', '교재별 성취율 관리', '성취율 관리 방법', '학습 중 진행률 점검', '학습 중 이행률 점검', '하원 시간 관리'],
  },
  {
    title: '학습 효율 및 전략',
    icon: 'solar:rocket-bold',
    color: '#e17055',
    gradient: 'linear-gradient(135deg, #ffeee8 0%, #ffddd2 100%)',
    items: ['교재 점검', '채점 관리', '틀린 문제 추적 관리', '클리닉 수업', '하원 보고서', '학습 전략 컨설팅', '내신 계획표 작성 및 기출문제 제공'],
  },
];

export default function Management() {
  const containerRef = useRevealAll();
  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <section id="management" style={{ padding: '120px 0', background: 'var(--color-bg-soft)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }} ref={containerRef}>
        {/* Header — left aligned with big number */}
        <div className="reveal" style={{
          display: 'flex', alignItems: 'flex-end', gap: '24px',
          marginBottom: '48px',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '64px', fontWeight: 800,
            color: 'var(--color-text)', letterSpacing: '-0.03em', lineHeight: 1,
          }}>{totalItems}</span>
          <div style={{ paddingBottom: '6px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, lineHeight: 1.3,
              color: 'var(--color-text)', letterSpacing: '-0.01em',
            }}>
              가지 체계적 관리
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginTop: '4px' }}>
              4개 영역에 걸쳐 빈틈없는 학습관리를 제공합니다.
            </p>
          </div>
        </div>

        {/* Category grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {categories.map((cat, ci) => {
            // Running item number
            const startNum = categories.slice(0, ci).reduce((sum, c) => sum + c.items.length, 0);
            return (
              <div key={cat.title} className={`reveal reveal-delay-${ci + 1}`}
                style={{
                  background: '#fff', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)', overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = cat.color + '40'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 16px 48px ${cat.color}10`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Category header with gradient */}
                <div style={{
                  background: cat.gradient, padding: '22px 28px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '14px',
                      background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                      <iconify-icon icon={cat.icon} style={{ fontSize: '22px', color: cat.color }}></iconify-icon>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--color-text)' }}>
                      {cat.title}
                    </h3>
                  </div>
                  <span style={{
                    padding: '4px 12px', borderRadius: 'var(--radius-full)',
                    background: '#fff', fontSize: '12px', fontWeight: 700, color: cat.color,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}>{cat.items.length}개</span>
                </div>

                {/* Items as numbered list */}
                <div style={{ padding: '20px 28px 24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {cat.items.map((item, ii) => (
                      <div key={item} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '12px 0',
                        borderBottom: ii < cat.items.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                      }}>
                        <span style={{
                          width: '24px', height: '24px', borderRadius: '8px', flexShrink: 0,
                          background: `${cat.color}10`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '12px', color: cat.color,
                        }}>
                          <iconify-icon icon="solar:check-read-linear"></iconify-icon>
                        </span>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text)', flex: 1 }}>{item}</span>
                        <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-text-tertiary)', flexShrink: 0 }}>
                          {String(startNum + ii + 1).padStart(2, '0')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
