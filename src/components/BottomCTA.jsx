import { useReveal } from '../hooks/useReveal';

const sectionStyle = {
  padding: '120px 0',
  background: 'var(--color-bg-soft)',
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
    <section id="contact" style={sectionStyle}>
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
              자녀를 방치하지 마십시오
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
              1년 뒤에도 성적이<br />
              제자리라면
            </h2>

            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              maxWidth: '440px',
              margin: '0 auto 40px',
            }}>
              오르는 것 같은 기분은 착각일 뿐입니다.<br />
              지금, 학습 습관부터 바꿔야 합니다.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
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
                학습서비스 신청
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
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                학부모 전문가 과정
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
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                예비원장 전문가 과정
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
