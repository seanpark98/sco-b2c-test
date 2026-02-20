import { useRevealAll } from '../hooks/useReveal';

const testimonials = [
  {
    name: '김서연 학부모',
    role: '중등 2학년 자녀',
    text: '아이가 학원만 다니면 된다고 생각했는데, 혼공 습관이 없었던 거였어요. SCOLABS에서 순공시간 관리를 시작하고 나서 3개월 만에 눈에 띄게 달라졌습니다.',
    avatar: '서',
    color: '#6c5ce7',
    highlight: '3개월 만에 눈에 띄게 달라졌습니다',
  },
  {
    name: '박준호 학부모',
    role: '고등 1학년 자녀',
    text: '성적 불변의 법칙이라는 말이 정확히 우리 집 이야기였어요. 원인을 알고 나니 방향이 보이더라고요. 스코 스파르타 프로그램이 전환점이 되었습니다.',
    avatar: '준',
    color: '#00b894',
    highlight: '원인을 알고 나니 방향이 보이더라고요',
  },
  {
    name: '이하은 학부모',
    role: '초등 6학년 자녀',
    text: '일찍 학습습관을 잡아줘야 한다는 걸 이제야 알았어요. 코칭 선생님이 아이 성향에 맞춰 학습 계획을 짜주시니까 아이도 스스로 공부하는 습관이 생겼어요.',
    avatar: '하',
    color: '#e17055',
    highlight: '스스로 공부하는 습관이 생겼어요',
  },
  {
    name: '정민수 학부모',
    role: '중등 3학년 자녀',
    text: '유명 학원을 전전하다가 SCOLABS를 알게 됐는데, 학원이 아니라 공부 방법 자체가 문제였다는 걸 깨달았습니다. 이제는 자기주도학습이 가능해졌어요.',
    avatar: '민',
    color: '#4a6cf7',
    highlight: '자기주도학습이 가능해졌어요',
  },
];

export default function Testimonials() {
  const containerRef = useRevealAll();
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section id="reviews" style={{ padding: '120px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }} ref={containerRef}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px',
            background: 'var(--color-blue-soft)', color: 'var(--color-blue)',
            borderRadius: 'var(--radius-full)', fontSize: '13px', fontWeight: 600, marginBottom: '20px',
          }}>
            <iconify-icon icon="solar:chat-round-dots-bold" style={{ fontSize: '16px' }}></iconify-icon>
            학부모 후기
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: 700, lineHeight: 1.2,
            color: 'var(--color-text)', letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            학부모님이 직접 전하는<br />SCOLABS 경험
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            실제 학부모님들의 생생한 후기를 확인하세요.
          </p>
        </div>

        {/* Featured + 3 cards layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {/* Featured testimonial (left, tall) */}
          <div className="reveal reveal-delay-1"
            style={{
              background: `linear-gradient(135deg, ${featured.color}08, ${featured.color}03)`,
              border: `1px solid ${featured.color}20`,
              borderRadius: 'var(--radius-lg)', padding: '40px 36px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {/* Large decorative quote */}
            <div style={{
              position: 'absolute', top: '20px', right: '24px',
              fontFamily: 'Georgia, serif', fontSize: '120px', lineHeight: 1,
              color: `${featured.color}10`, fontWeight: 700, pointerEvents: 'none',
            }}>&rdquo;</div>

            <div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '24px' }}>
                {[...Array(5)].map((_, si) => (
                  <iconify-icon key={si} icon="solar:star-bold" style={{ color: '#facc15', fontSize: '18px' }}></iconify-icon>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '18px', lineHeight: 1.9, color: 'var(--color-text)',
                marginBottom: '16px', fontWeight: 400, position: 'relative', zIndex: 1,
              }}>
                &ldquo;{featured.text}&rdquo;
              </p>

              {/* Highlight */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 16px', borderRadius: 'var(--radius-full)',
                background: `${featured.color}12`, marginBottom: '32px',
              }}>
                <iconify-icon icon="solar:verified-check-bold" style={{ fontSize: '14px', color: featured.color }}></iconify-icon>
                <span style={{ fontSize: '13px', fontWeight: 600, color: featured.color }}>{featured.highlight}</span>
              </div>
            </div>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: featured.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', fontWeight: 700, color: '#fff',
                boxShadow: `0 4px 12px ${featured.color}40`,
              }}>
                {featured.avatar}
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text)' }}>{featured.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-tertiary)' }}>{featured.role}</div>
              </div>
            </div>
          </div>

          {/* Right column: 3 stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {rest.map((t, i) => (
              <div key={t.name} className={`reveal reveal-delay-${i + 2}`}
                style={{
                  background: '#fff', border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-lg)', padding: '24px 28px',
                  transition: 'all 0.3s ease', flex: 1,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  borderLeft: `3px solid ${t.color}`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                    {[...Array(5)].map((_, si) => (
                      <iconify-icon key={si} icon="solar:star-bold" style={{ color: '#facc15', fontSize: '14px' }}></iconify-icon>
                    ))}
                  </div>
                  {/* Quote */}
                  <p style={{
                    fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text)',
                    marginBottom: '16px', fontWeight: 400,
                  }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: `${t.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 700, color: t.color,
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
