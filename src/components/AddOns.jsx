import { useRevealAll } from '../hooks/useReveal';

const addons = [
  { icon: 'solar:chat-round-dots-bold', name: '코칭', detail: '주 1회, 기본 9만', color: '#6c5ce7', desc: '전문 튜터의 1:1 학습 코칭' },
  { icon: 'solar:book-bold', name: '교재 점검', detail: '1일 1.1만', color: '#4a6cf7', desc: '교재 진도 및 이해도 체크' },
  { icon: 'solar:check-circle-bold', name: '채점 관리', detail: '별도 문의', color: '#00b894', desc: '정확한 채점과 오답 분석' },
  { icon: 'solar:square-academic-cap-bold', name: '클리닉 수업', detail: '초8 / 중10 / 고12', color: '#e17055', desc: '취약 부분 집중 보완 수업' },
  { icon: 'solar:graph-up-bold', name: '학습 전략 컨설팅', detail: '별도 문의', color: '#d4a017', desc: '맞춤형 학습 로드맵 설계' },
  { icon: 'solar:document-bold', name: '내신 관리', detail: '회당 30만', color: '#fd79a8', desc: '내신 계획 + 기출문제 제공' },
];

export default function AddOns() {
  const containerRef = useRevealAll();

  return (
    <section style={{ padding: '120px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }} ref={containerRef}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: 700, lineHeight: 1.3,
            color: 'var(--color-text)', letterSpacing: '-0.02em',
          }}>
            추가 학습 서비스
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginTop: '12px', whiteSpace: 'nowrap' }}>
            기본 프로그램에 더해 자녀에게 필요한 서비스를 선택하세요.
          </p>
        </div>

        {/* Add-on grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {addons.map((a, i) => (
            <div key={a.name} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: '#fff', border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                transition: 'all 0.3s ease', position: 'relative',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = a.color + '60'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 48px ${a.color}12`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03)'; }}
            >
              {/* Color accent top bar */}
              <div style={{ height: '3px', background: a.color }}></div>
              <div style={{ padding: '28px 24px' }}>
                {/* Number + Icon row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '16px',
                    background: `${a.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <iconify-icon icon={a.icon} style={{ fontSize: '24px', color: a.color }}></iconify-icon>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800,
                    color: `${a.color}15`, letterSpacing: '-0.02em',
                  }}>0{i + 1}</span>
                </div>
                {/* Name */}
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
                  {a.name}
                </h4>
                {/* Description */}
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {a.desc}
                </p>
                {/* Price tag */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '6px 14px', borderRadius: 'var(--radius-full)',
                  background: 'var(--color-bg-soft)', border: '1px solid var(--color-border-light)',
                }}>
                  <iconify-icon icon="solar:tag-bold" style={{ fontSize: '12px', color: a.color }}></iconify-icon>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    {a.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
