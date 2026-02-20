import { useState, useEffect } from 'react';

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  padding: '20px 40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
};

const navScrolledStyle = {
  ...navStyle,
  padding: '14px 40px',
  background: 'rgba(255,255,255,0.85)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(0,0,0,0.06)',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontFamily: 'var(--font-display)',
  fontSize: '20px',
  fontWeight: 700,
  color: '#fff',
  letterSpacing: '-0.02em',
};

const menuContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '6px',
  borderRadius: 'var(--radius-full)',
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.08)',
};

const menuItemStyle = {
  padding: '8px 20px',
  fontSize: '13px',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.8)',
  borderRadius: 'var(--radius-full)',
  transition: 'all 0.2s ease',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  cursor: 'pointer',
};

const ctaBtnStyle = {
  padding: '10px 24px',
  fontSize: '13px',
  fontWeight: 600,
  color: '#fff',
  background: 'rgba(0,0,0,0.7)',
  borderRadius: 'var(--radius-full)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentNavStyle = scrolled ? navScrolledStyle : navStyle;
  const currentLogoColor = scrolled ? '#1a1a2e' : '#fff';
  const currentMenuBg = scrolled
    ? { background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.06)', backdropFilter: 'none' }
    : {};
  const currentMenuItemColor = scrolled ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.8)';
  const currentCtaStyle = scrolled
    ? { ...ctaBtnStyle, background: '#1a1a2e', color: '#fff' }
    : ctaBtnStyle;

  return (
    <nav style={currentNavStyle}>
      <div style={{ ...logoStyle, color: currentLogoColor }}>
        <iconify-icon icon="solar:square-academic-cap-bold" style={{ fontSize: '26px' }}></iconify-icon>
        SCOLABS
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ ...menuContainerStyle, ...currentMenuBg }}>
          {['플랫폼', '커뮤니티', '가격'].map((item) => (
            <span
              key={item}
              style={{ ...menuItemStyle, color: currentMenuItemColor }}
              onMouseEnter={(e) => {
                e.target.style.background = scrolled ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.15)';
                e.target.style.color = scrolled ? '#1a1a2e' : '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = currentMenuItemColor;
              }}
            >
              {item}
            </span>
          ))}
          <span style={currentCtaStyle}>시작하기</span>
        </div>
      </div>
    </nav>
  );
}
