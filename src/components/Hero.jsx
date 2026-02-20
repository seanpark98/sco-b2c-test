import { useEffect, useRef } from 'react';

const heroSection = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  minHeight: '700px',
  overflow: 'hidden',
  background: '#0a0a14',
};

const unicornBg = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
};

const overlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(10,10,20,0.2) 0%, rgba(10,10,20,0.1) 50%, rgba(10,10,20,0.5) 100%)',
  zIndex: 2,
};

const contentWrapper = {
  position: 'relative',
  zIndex: 3,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '140px 48px 48px',
  maxWidth: '1400px',
  margin: '0 auto',
};

const headlineStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(48px, 6.5vw, 96px)',
  fontWeight: 800,
  lineHeight: 1.05,
  color: '#ffffff',
  letterSpacing: '-0.03em',
  maxWidth: '900px',
};

const bottomBar = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '40px',
};

const descStyle = {
  fontSize: '16px',
  lineHeight: 1.7,
  color: 'rgba(255,255,255,0.65)',
  maxWidth: '460px',
};

const ctaGroup = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flexShrink: 0,
};

const ctaButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '14px 28px',
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 'var(--radius-full)',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const ctaArrowStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: '#b8f06a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0a0a14',
  fontSize: '20px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Re-initialize Unicorn Studio after mount
    if (window.UnicornStudio && window.UnicornStudio.init) {
      window.UnicornStudio.init();
    }
  }, []);

  return (
    <section style={heroSection} ref={heroRef}>
      {/* Unicorn Studio Background */}
      <div style={unicornBg}>
        <div
          data-us-project="Gg6tzfO33cqonyEG66b2"
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div style={overlay}></div>

      {/* Content */}
      <div style={contentWrapper}>
        <div>
          <h1 style={headlineStyle}>
            질문하면,<br />
            답이 열린다.
          </h1>
        </div>

        <div style={bottomBar}>
          <p style={descStyle}>
            AI 기반 교육 Q&A 플랫폼에서 전문가와 함께<br />
            실시간으로 궁금증을 해결하고 성장하세요.
          </p>
          <div style={ctaGroup}>
            <span
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              플랫폼 둘러보기
            </span>
            <span
              style={ctaArrowStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = '#c8ff7a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = '#b8f06a';
              }}
            >
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
