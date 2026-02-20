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
              SCOLABS
            </div>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-tertiary)',
              lineHeight: 1.6,
              maxWidth: '260px',
            }}>
              진짜 공부를 하자, 하자공부<br />
              학습습관 형성 전문 교육 플랫폼
            </p>
          </div>

          {/* Link Groups */}
          <div style={linkGroupStyle}>
            <div style={linkColumnStyle}>
              <span style={linkHeaderStyle}>서비스</span>
              <span style={linkItemStyle}>스코 스탠다드</span>
              <span style={linkItemStyle}>스코 스파르타</span>
              <span style={linkItemStyle}>스코 블랙</span>
              <span style={linkItemStyle}>스코 프리미엄</span>
            </div>
            <div style={linkColumnStyle}>
              <span style={linkHeaderStyle}>신청</span>
              <span style={linkItemStyle}>학습서비스 신청</span>
              <span style={linkItemStyle}>학부모 전문가 과정</span>
              <span style={linkItemStyle}>예비원장 전문가 과정</span>
            </div>
            <div style={linkColumnStyle}>
              <span style={linkHeaderStyle}>고객지원</span>
              <span style={linkItemStyle}>문의하기</span>
              <span style={linkItemStyle}>자주 묻는 질문</span>
              <span style={linkItemStyle}>이용약관</span>
              <span style={linkItemStyle}>개인정보처리방침</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={bottomRowStyle}>
          <span style={{ fontSize: '13px', color: 'var(--color-text-tertiary)' }}>
            © 2026 SCOLABS. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { icon: 'solar:letter-bold', label: 'Email' },
              { icon: 'solar:phone-bold', label: 'Phone' },
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
