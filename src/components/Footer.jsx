const footerStyle = {
  background: '#fafbfd',
  borderTop: '1px solid var(--color-border-light)',
  padding: '64px 0 40px',
};

const innerStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--container-padding)',
};

const topRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '48px',
  gap: '40px',
};

const linkGroupStyle = {
  display: 'flex',
  gap: '80px',
};

const linkColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const linkHeaderStyle = {
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--color-text-tertiary)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  marginBottom: '4px',
};

const linkItemStyle = {
  fontSize: '14px',
  color: 'var(--color-text-secondary)',
  fontWeight: 400,
  cursor: 'pointer',
  transition: 'color 0.2s ease',
};

const bottomRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '24px',
  borderTop: '1px solid var(--color-border-light)',
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div style={topRowStyle}>
          {/* Logo */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '12px',
            }}>
              <iconify-icon icon="solar:square-academic-cap-bold" style={{ fontSize: '24px', color: 'var(--color-accent)' }}></iconify-icon>
              QRAFT
            </div>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-tertiary)',
              lineHeight: 1.6,
              maxWidth: '260px',
            }}>
              AI와 전문가가 함께하는<br />
              차세대 교육 Q&A 플랫폼
            </p>
          </div>

          {/* Link Groups */}
          <div style={linkGroupStyle}>
            <div style={linkColumnStyle}>
              <span style={linkHeaderStyle}>제품</span>
              <span style={linkItemStyle}>기능 소개</span>
              <span style={linkItemStyle}>요금제</span>
              <span style={linkItemStyle}>업데이트</span>
              <span style={linkItemStyle}>로드맵</span>
            </div>
            <div style={linkColumnStyle}>
              <span style={linkHeaderStyle}>고객지원</span>
              <span style={linkItemStyle}>도움말 센터</span>
              <span style={linkItemStyle}>문의하기</span>
              <span style={linkItemStyle}>가이드</span>
              <span style={linkItemStyle}>API 문서</span>
            </div>
            <div style={linkColumnStyle}>
              <span style={linkHeaderStyle}>회사</span>
              <span style={linkItemStyle}>소개</span>
              <span style={linkItemStyle}>채용</span>
              <span style={linkItemStyle}>블로그</span>
              <span style={linkItemStyle}>보도자료</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={bottomRowStyle}>
          <span style={{ fontSize: '13px', color: 'var(--color-text-tertiary)' }}>
            © 2026 QRAFT. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { icon: 'solar:letter-bold', label: 'Email' },
              { icon: 'solar:chat-round-dots-bold', label: 'Community' },
            ].map((s) => (
              <span
                key={s.label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--color-bg-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                  fontSize: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-soft)';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-bg-muted)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                <iconify-icon icon={s.icon}></iconify-icon>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
