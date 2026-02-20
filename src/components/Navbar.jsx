import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { label: '성적 진단', href: '#diagnosis' },
  { label: '프로그램', href: '#programs' },
  { label: '관리 시스템', href: '#management' },
  { label: '후기', href: '#reviews' },
];

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
  cursor: 'pointer',
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
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'block',
};

const ctaBtnStyle = {
  padding: '10px 24px',
  fontSize: '13px',
  fontWeight: 600,
  color: '#fff',
  background: 'rgba(0,0,0,0.7)',
  borderRadius: 'var(--radius-full)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
  display: 'block',
};

function scrollToEl(href) {
  const el = document.querySelector(href);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Navbar({ forceLight = false }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // On non-home pages or when forceLight, always use light/scrolled style
  const light = forceLight || !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentNavStyle = light ? navScrolledStyle : navStyle;
  const currentLogoColor = light ? '#1a1a2e' : '#fff';
  const currentMenuBg = light
    ? { background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.06)', backdropFilter: 'none' }
    : {};
  const currentMenuItemColor = light ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.8)';
  const currentCtaStyle = light
    ? { ...ctaBtnStyle, background: '#1a1a2e', color: '#fff' }
    : ctaBtnStyle;

  function handleNavClick(href) {
    if (isHome) {
      scrollToEl(href);
    } else {
      navigate('/' + href);
    }
  }

  return (
    <nav style={currentNavStyle}>
      <div
        style={{ ...logoStyle, color: currentLogoColor }}
        onClick={() => {
          if (isHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            navigate('/');
          }
        }}
      >
        <iconify-icon icon="solar:square-academic-cap-bold" style={{ fontSize: '26px' }}></iconify-icon>
        SCOLABS
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ ...menuContainerStyle, ...currentMenuBg }}>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ ...menuItemStyle, color: currentMenuItemColor }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = light ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = light ? '#1a1a2e' : '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = currentMenuItemColor;
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            style={currentCtaStyle}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            상담 신청
          </a>
        </div>
      </div>
    </nav>
  );
}
