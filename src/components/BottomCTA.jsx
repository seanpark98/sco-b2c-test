import { useReveal } from '../hooks/useReveal';

const sectionStyle = {
  padding: '120px 0',
  background: 'var(--color-bg)',
};

const cardStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '80px var(--container-padding)',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%)',
  borderRadius: '24px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
};

const glowStyle = {
  position: 'absolute',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  opacity: 0.3,
  pointerEvents: 'none',
};

export default function BottomCTA() {
  const ref = useReveal();

  return (
    <section style={sectionStyle}>
      <div style={{ padding: '0 var(--container-padding)' }}>
        <div style={cardStyle} ref={ref} className="reveal">
          {/* Background glows */}
          <div style={{ ...glowStyle, top: '-100px', left: '-100px', background: '#6c5ce7' }}></div>
          <div style={{ ...glowStyle, bottom: '-100px', right: '-100px', background: '#4a6cf7' }}></div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '28px',
            }}>
              <iconify-icon icon="solar:lightning-bold" style={{ fontSize: '16px' }}></iconify-icon>
              지금 바로 시작하세요
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '44px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}>
              당신의 학습을<br />
              한 단계 끌어올리세요
            </h2>

            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              maxWidth: '440px',
              margin: '0 auto 40px',
            }}>
              52,000명 이상의 학생이 SCOLABS와 함께<br />
              더 스마트하게 공부하고 있습니다.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <button
                style={{
                  padding: '16px 36px',
                  background: '#b8f06a',
                  color: '#0a0a14',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '15px',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#c8ff7a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,240,106,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#b8f06a';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                무료로 시작하기
              </button>
              <button
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
              >
                자세히 알아보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
