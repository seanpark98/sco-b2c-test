import { useRevealAll } from '../hooks/useReveal';

const features = [
  {
    icon: 'solar:magic-stick-3-bold',
    title: 'AI 기반 답변 생성',
    desc: 'GPT 기반의 지능형 답변 시스템이 복잡한 질문도 정확하게 분석하여 맞춤형 답변을 제공합니다.',
    visual: 'ai',
    size: 'large',
  },
  {
    icon: 'solar:chart-2-bold',
    title: '학습 대시보드',
    desc: '개인 맞춤 대시보드에서 학습 진도, 취약 영역, 성과 추이를 실시간으로 확인하고 관리할 수 있습니다.',
    visual: 'dashboard',
    size: 'large',
  },
  {
    icon: 'solar:users-group-two-rounded-bold',
    title: '실시간 협업 학습',
    desc: '동료 학습자들과 함께 실시간으로 토론하고 인사이트를 나눠보세요.',
    visual: 'collab',
    size: 'small',
  },
  {
    icon: 'solar:routing-bold',
    title: '맞춤형 학습 경로',
    desc: '개인별 수준에 맞는 최적화된 커리큘럼을 자동으로 설계합니다.',
    visual: 'path',
    size: 'small',
  },
  {
    icon: 'solar:shield-check-bold',
    title: '검증된 전문가 답변',
    desc: '각 분야 인증된 전문가의 검증을 거친 신뢰할 수 있는 답변을 보장합니다.',
    visual: 'verified',
    size: 'small',
  },
];

/* ── Card illustration components ── */
function AIVisual() {
  return (
    <div style={{
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      {/* Integration pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {['수학', '과학', '영어', '코딩'].map((t) => (
          <span key={t} style={{
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--color-border)',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <iconify-icon icon="solar:bookmark-bold" style={{ fontSize: '14px', color: 'var(--color-accent)' }}></iconify-icon>
            {t}
          </span>
        ))}
      </div>

      {/* AI Processing card */}
      <div style={{
        background: 'var(--color-accent)',
        color: '#fff',
        padding: '10px 16px',
        borderRadius: 'var(--radius-md)',
        fontSize: '13px',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        alignSelf: 'center',
      }}>
        <iconify-icon icon="solar:magic-stick-3-bold" style={{ fontSize: '16px' }}></iconify-icon>
        AI 분석 중...
      </div>

      {/* Chat bubble */}
      <div style={{
        background: '#fff',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px',
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <iconify-icon icon="solar:stars-bold" style={{ color: 'var(--color-accent)', fontSize: '16px' }}></iconify-icon>
          <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '12px' }}>AI 답변 생성 완료</span>
        </div>
        이차방정식의 근의 공식은 x = (-b ± √(b²-4ac)) / 2a 입니다...
      </div>

      {/* User avatars */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', justifyContent: 'center' }}>
        {['A', 'B', 'C', 'D', 'E'].map((u, i) => (
          <div key={i} style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: ['#6c5ce7', '#00b894', '#fdcb6e', '#e17055', '#74b9ff'][i],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 700,
            color: '#fff',
            border: '2px solid #fff',
            marginLeft: i > 0 ? '-8px' : '0',
          }}>
            {u}
          </div>
        ))}
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginLeft: '8px' }}>
          52,000+ 사용자가 이용 중
        </span>
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div style={{ padding: '20px 24px' }}>
      {/* Dashboard header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <iconify-icon icon="solar:widget-bold" style={{ color: 'var(--color-accent)', fontSize: '18px' }}></iconify-icon>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>학습 대시보드</span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['전체', '주간', '월간'].map((t, i) => (
            <span key={t} style={{
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '11px',
              fontWeight: 500,
              background: i === 0 ? 'var(--color-text)' : 'transparent',
              color: i === 0 ? '#fff' : 'var(--color-text-tertiary)',
              border: i === 0 ? 'none' : '1px solid var(--color-border)',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        {[
          { label: '해결된 질문', val: '2,957', change: '+40%', color: '#00c48c' },
          { label: '학습 시간', val: '186h', change: '+12%', color: '#4a6cf7' },
          { label: '정답률', val: '94.2%', change: '+8%', color: '#6c5ce7' },
        ].map((s) => (
          <div key={s.label} style={{
            background: '#fff',
            border: '1px solid var(--color-border-light)',
            borderRadius: 'var(--radius-sm)',
            padding: '12px',
          }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>{s.val}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
              <span style={{ fontSize: '11px', color: s.color, fontWeight: 600 }}>{s.change}</span>
              <span style={{ fontSize: '10px', color: 'var(--color-text-tertiary)' }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mini chart bars */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '6px',
        height: '60px',
        padding: '0 8px',
      }}>
        {[35, 55, 40, 70, 60, 80, 45, 90, 65, 75, 50, 85].map((h, i) => (
          <div key={i} style={{
            flex: 1,
            height: `${h}%`,
            borderRadius: '4px 4px 0 0',
            background: i === 7 ? 'var(--color-accent)' : 'var(--color-accent-soft)',
            transition: 'height 0.5s ease',
          }}></div>
        ))}
      </div>
    </div>
  );
}

function CollabVisual() {
  return (
    <div style={{
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: '160px',
    }}>
      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        {/* Center hub */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 8px var(--color-accent-soft)',
        }}>
          <iconify-icon icon="solar:chat-round-dots-bold" style={{ color: '#fff', fontSize: '20px' }}></iconify-icon>
        </div>
        {/* Orbit dots */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          return (
            <div key={i} style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: ['#6c5ce7', '#00b894', '#fdcb6e', '#e17055', '#74b9ff', '#fd79a8'][i],
              border: '2px solid #fff',
              fontSize: '10px',
              fontWeight: 700,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {['김', '이', '박', '최', '정', '한'][i]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PathVisual() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { label: '기본 개념 학습', icon: 'solar:book-bold', done: true },
        { label: '실전 문제 풀기', icon: 'solar:document-bold', done: true },
        { label: '심화 분석', icon: 'solar:graph-up-bold', done: false },
      ].map((step, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: 'var(--radius-sm)',
          background: step.done ? 'var(--color-accent-soft)' : '#fff',
          border: `1px solid ${step.done ? 'var(--color-accent-light)' : 'var(--color-border)'}`,
          fontSize: '12px',
          fontWeight: 500,
          color: step.done ? 'var(--color-accent)' : 'var(--color-text-secondary)',
        }}>
          <iconify-icon icon={step.icon} style={{ fontSize: '16px' }}></iconify-icon>
          {step.label}
          {step.done && (
            <iconify-icon icon="solar:check-circle-bold" style={{ marginLeft: 'auto', fontSize: '16px', color: 'var(--color-success)' }}></iconify-icon>
          )}
          {!step.done && (
            <iconify-icon icon="solar:arrow-right-linear" style={{ marginLeft: 'auto', fontSize: '14px' }}></iconify-icon>
          )}
        </div>
      ))}
    </div>
  );
}

function VerifiedVisual() {
  return (
    <div style={{
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: '160px',
    }}>
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '28px',
        background: 'linear-gradient(135deg, var(--color-accent-soft) 0%, #e8e4ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <iconify-icon icon="solar:shield-check-bold" style={{
          fontSize: '48px',
          color: 'var(--color-accent)',
        }}></iconify-icon>
        <div style={{
          position: 'absolute',
          bottom: '-4px',
          right: '-4px',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'var(--color-success)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid #fff',
        }}>
          <iconify-icon icon="solar:check-circle-bold" style={{ color: '#fff', fontSize: '14px' }}></iconify-icon>
        </div>
      </div>
    </div>
  );
}

const visualMap = {
  ai: AIVisual,
  dashboard: DashboardVisual,
  collab: CollabVisual,
  path: PathVisual,
  verified: VerifiedVisual,
};

/* ── Main Features Component ── */
export default function Features() {
  const containerRef = useRevealAll();

  return (
    <section style={{ padding: '120px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }} ref={containerRef}>
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'var(--color-accent-soft)',
            color: 'var(--color-accent)',
            borderRadius: 'var(--radius-full)',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '20px',
          }}>
            <iconify-icon icon="solar:star-bold" style={{ fontSize: '16px' }}></iconify-icon>
            주요 기능
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '42px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--color-text)',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            학습의 모든 순간을<br />더 스마트하게
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            AI와 전문가가 함께하는 차세대 교육 플랫폼의 핵심 기능을 소개합니다.
          </p>
        </div>

        {/* Bento Grid: 2 large top, 3 small bottom */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginBottom: '20px',
        }}>
          {features.filter(f => f.size === 'large').map((f, i) => {
            const Visual = visualMap[f.visual];
            return (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'var(--color-bg-soft)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,92,231,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Visual Area */}
                <div style={{ borderBottom: '1px solid var(--color-border-light)', minHeight: '240px' }}>
                  <Visual />
                </div>
                {/* Text Area */}
                <div style={{ padding: '28px 28px 32px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row: 3 small cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {features.filter(f => f.size === 'small').map((f, i) => {
            const Visual = visualMap[f.visual];
            return (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 3}`}
                style={{
                  background: 'var(--color-bg-soft)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,92,231,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                  <Visual />
                </div>
                <div style={{ padding: '24px 24px 28px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '6px',
                    letterSpacing: '-0.01em',
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
