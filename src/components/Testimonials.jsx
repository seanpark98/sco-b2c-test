import { useRevealAll } from '../hooks/useReveal';

const testimonials = [
  {
    name: '김서연',
    role: '서울대 의학과 3학년',
    text: '복잡한 의학 개념도 AI가 즉시 설명해주고, 전문가 튜터의 피드백까지 받을 수 있어서 학습 효율이 3배는 올랐어요.',
    avatar: '서',
    color: '#6c5ce7',
  },
  {
    name: '박준호',
    role: 'KAIST 전산학부 2학년',
    text: '알고리즘 문제 풀다 막히면 바로 질문하고 답변 받을 수 있어서 좋아요. 코드 리뷰까지 해주는 건 여기뿐이에요.',
    avatar: '준',
    color: '#00b894',
  },
  {
    name: '이하은',
    role: '고려대 경영학과 4학년',
    text: '통계학 과목 전문가 답변의 퀄리티가 정말 높아요. 검증된 답변이라 믿고 참고할 수 있다는 게 가장 큰 장점이에요.',
    avatar: '하',
    color: '#e17055',
  },
  {
    name: '정민수',
    role: '연세대 물리학과 석사',
    text: '대학원 연구 중 궁금한 점을 바로 물어볼 수 있는 플랫폼이 없었는데, SCOLABS 덕분에 연구 속도가 확 빨라졌습니다.',
    avatar: '민',
    color: '#4a6cf7',
  },
];

const sectionStyle = {
  padding: '120px 0',
  background: 'var(--color-bg-soft)',
};

const cardStyle = {
  background: '#fff',
  border: '1px solid var(--color-border-light)',
  borderRadius: 'var(--radius-lg)',
  padding: '32px',
  minWidth: '340px',
  flex: '0 0 340px',
  transition: 'all 0.3s ease',
  cursor: 'default',
};

export default function Testimonials() {
  const containerRef = useRevealAll();

  return (
    <section style={sectionStyle}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }} ref={containerRef}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'var(--color-blue-soft)',
            color: 'var(--color-blue)',
            borderRadius: 'var(--radius-full)',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '20px',
          }}>
            <iconify-icon icon="solar:chat-round-dots-bold" style={{ fontSize: '16px' }}></iconify-icon>
            사용자 후기
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '42px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            학생들이 직접 전하는<br />SCOLABS 경험
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,92,231,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-light)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, si) => (
                  <iconify-icon key={si} icon="solar:star-bold" style={{ color: '#facc15', fontSize: '16px' }}></iconify-icon>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '15px',
                lineHeight: 1.8,
                color: 'var(--color-text)',
                marginBottom: '24px',
                fontWeight: 400,
              }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: t.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#fff',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text)' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
