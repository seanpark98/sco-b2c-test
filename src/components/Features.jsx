import { useRevealAll } from '../hooks/useReveal';
import { useNavigate } from 'react-router-dom';

const parts = [
  { num: 1, title: '우리 자녀는 왜 성적이 오르지 않을까?', answer: '공부방법을 몰라서이다.', size: 'large', color: '#6c5ce7' },
  { num: 2, title: '우리 자녀는 왜 공부방법을 모를까?', answer: '학습습관(혼공경험)이 없어서이다.', size: 'large', color: '#4a6cf7' },
  { num: 3, title: '학부모님의 착각이 학습습관을 망친다', answer: '잘못된 생각이 자녀의 공부습관을 결정합니다.', size: 'small', color: '#e17055' },
  { num: 4, title: '우리 자녀의 학습습관은 어느 단계?', answer: '순공시간 가이드로 진단합니다.', size: 'small', color: '#00b894' },
  { num: 5, title: '성적향상 4단계 필수전략', answer: '습관, 학습양, 효율, 선택과 집중.', size: 'small', color: '#fdcb6e' },
];

/* ── Rich Visual Illustrations (Enhanced) ── */
function Part1Visual() {
  return (
    <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'linear-gradient(180deg, #fafbff 0%, #f8f9fc 100%)' }}>
      {/* Subject pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { name: '수학', icon: 'solar:calculator-bold', color: '#6c5ce7' },
          { name: '영어', icon: 'solar:global-bold', color: '#4a6cf7' },
          { name: '국어', icon: 'solar:book-2-bold', color: '#00b894' },
          { name: '과학', icon: 'solar:test-tube-bold', color: '#e17055' },
        ].map((t) => (
          <span key={t.name} style={{
            padding: '7px 14px', borderRadius: 'var(--radius-full)',
            border: '1px solid var(--color-border-light)', fontSize: '12px', fontWeight: 600,
            color: t.color, background: '#fff',
            display: 'flex', alignItems: 'center', gap: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          }}>
            <iconify-icon icon={t.icon} style={{ fontSize: '14px' }}></iconify-icon>
            {t.name}
          </span>
        ))}
      </div>
      {/* Alert card */}
      <div style={{
        background: 'linear-gradient(135deg, #fff5f3 0%, #ffe8e3 100%)', border: '1px solid #ffc4b8',
        borderRadius: 'var(--radius-md)', padding: '16px 18px', fontSize: '13px', color: '#c0392b',
        lineHeight: 1.7, boxShadow: '0 2px 12px rgba(192,57,43,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{
            width: '24px', height: '24px', borderRadius: '8px', background: '#c0392b',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <iconify-icon icon="solar:danger-triangle-bold" style={{ fontSize: '13px', color: '#fff' }}></iconify-icon>
          </div>
          <span style={{ fontWeight: 700, fontSize: '13px' }}>성적 불변의 법칙</span>
        </div>
        열심히 하는데 성적이 오르지 않는다면, 방법이 잘못된 것입니다.
      </div>
      {/* Question bubbles */}
      {[
        { q: '"일타 강사인데 왜 점수가 안 나오죠?"', align: 'flex-start' },
        { q: '"밤늦게까지 앉아있는데..."', align: 'flex-end' },
      ].map((item, i) => (
        <div key={i} style={{
          background: '#fff', border: '1px solid var(--color-border-light)',
          borderRadius: i === 0 ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
          padding: '12px 16px', fontSize: '13px', fontWeight: 500,
          color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '10px',
          alignSelf: item.align, maxWidth: '90%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        }}>
          <iconify-icon icon="solar:chat-round-dots-bold" style={{ fontSize: '16px', color: '#6c5ce7', flexShrink: 0 }}></iconify-icon>
          {item.q}
        </div>
      ))}
    </div>
  );
}

function Part2Visual() {
  return (
    <div style={{ padding: '24px', background: 'linear-gradient(180deg, #f8faff 0%, #f8f9fc 100%)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #6c5ce7, #4a6cf7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <iconify-icon icon="solar:widget-bold" style={{ color: '#fff', fontSize: '14px' }}></iconify-icon>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text)' }}>성적의 진짜 주인</span>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {['초등', '중등', '고등'].map((t, i) => (
            <span key={t} style={{
              padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 600,
              background: i === 0 ? 'linear-gradient(135deg, #6c5ce7, #4a6cf7)' : 'transparent',
              color: i === 0 ? '#fff' : 'var(--color-text-tertiary)',
              border: i === 0 ? 'none' : '1px solid var(--color-border)',
            }}>{t}</span>
          ))}
        </div>
      </div>
      {/* Owner cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
        {[
          { label: '초등', val: '학부모', icon: 'solar:users-group-two-rounded-bold', color: '#6c5ce7', bg: 'linear-gradient(135deg, #f0eeff 0%, #e8e4ff 100%)' },
          { label: '중등', val: '학원', icon: 'solar:buildings-bold', color: '#4a6cf7', bg: 'linear-gradient(135deg, #eef2ff 0%, #e4ecff 100%)' },
          { label: '고등', val: '학생 자신', icon: 'solar:user-bold', color: '#00b894', bg: 'linear-gradient(135deg, #e8faf3 0%, #d4f5e8 100%)' },
        ].map((s) => (
          <div key={s.label} style={{
            background: s.bg, border: '1px solid var(--color-border-light)',
            borderRadius: 'var(--radius-md)', padding: '14px 10px', textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          }}>
            <iconify-icon icon={s.icon} style={{ fontSize: '22px', color: s.color, marginBottom: '6px', display: 'block' }}></iconify-icon>
            <div style={{ fontSize: '14px', fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)' }}>{s.val}</div>
            <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginTop: '3px', fontWeight: 500 }}>{s.label} 성적</div>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div style={{
        background: '#fff', border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-sm)', padding: '12px 14px',
        display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap', fontWeight: 600 }}>자립도</span>
        <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: '#f0f1f4', overflow: 'hidden' }}>
          <div style={{
            width: '30%', height: '100%', borderRadius: '4px',
            background: 'linear-gradient(90deg, #6c5ce7, #4a6cf7, #00b894)',
          }}></div>
        </div>
        <span style={{ fontSize: '11px', color: 'var(--color-accent)', fontWeight: 700 }}>30%</span>
      </div>
    </div>
  );
}

function Part3Visual() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', background: 'linear-gradient(180deg, #fefcfb 0%, #f8f9fc 100%)' }}>
      {[
        { label: '목표에 대한 착각', icon: 'solar:target-bold', danger: true },
        { label: '시기에 대한 착각', icon: 'solar:clock-circle-bold', danger: true },
        { label: '재능에 대한 착각', icon: 'solar:star-bold', danger: false },
      ].map((step, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          background: step.danger ? 'linear-gradient(135deg, #fff5f3, #ffe8e3)' : '#fff',
          border: `1px solid ${step.danger ? '#ffc4b8' : 'var(--color-border-light)'}`,
          fontSize: '13px', fontWeight: 600,
          color: step.danger ? '#c0392b' : 'var(--color-text)',
          boxShadow: step.danger ? '0 2px 8px rgba(192,57,43,0.04)' : '0 2px 8px rgba(0,0,0,0.02)',
        }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
            background: step.danger ? '#c0392b' : 'var(--color-bg-muted)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <iconify-icon icon={step.icon} style={{ fontSize: '14px', color: step.danger ? '#fff' : 'var(--color-text-secondary)' }}></iconify-icon>
          </div>
          {step.label}
          {step.danger && <iconify-icon icon="solar:close-circle-bold" style={{ marginLeft: 'auto', fontSize: '18px', color: '#e74c3c' }}></iconify-icon>}
          {!step.danger && <iconify-icon icon="solar:arrow-right-linear" style={{ marginLeft: 'auto', fontSize: '16px', color: 'var(--color-text-tertiary)' }}></iconify-icon>}
        </div>
      ))}
      <div style={{
        textAlign: 'center', padding: '6px 0', fontSize: '11px', fontWeight: 600,
        color: 'var(--color-text-tertiary)', letterSpacing: '0.02em',
      }}>
        외 5가지 착각 더 보기
      </div>
    </div>
  );
}

function Part4Visual() {
  return (
    <div style={{
      padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: '100%', minHeight: '180px', background: 'linear-gradient(180deg, #f8faff 0%, #f8f9fc 100%)',
    }}>
      <div style={{ position: 'relative', width: '140px', height: '140px' }}>
        {/* Outer ring */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '2px dashed var(--color-border)', opacity: 0.5,
        }}></div>
        {/* Inner ring */}
        <div style={{
          position: 'absolute', inset: '20px', borderRadius: '50%',
          border: '2px dashed var(--color-border)', opacity: 0.3,
        }}></div>
        {/* Center */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #6c5ce7, #4a6cf7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(108,92,231,0.3), 0 0 0 8px rgba(108,92,231,0.08)',
        }}>
          <iconify-icon icon="solar:clock-circle-bold" style={{ color: '#fff', fontSize: '22px' }}></iconify-icon>
        </div>
        {/* Orbit labels */}
        {[
          { label: '초등', deg: -30, color: '#6c5ce7', bg: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
          { label: '중등', deg: 90, color: '#00b894', bg: 'linear-gradient(135deg, #00b894, #55efc4)' },
          { label: '고등', deg: 210, color: '#e17055', bg: 'linear-gradient(135deg, #e17055, #fab1a0)' },
        ].map(({ label, deg, bg }, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 50 + 47 * Math.cos(rad);
          const y = 50 + 47 * Math.sin(rad);
          return (
            <div key={i} style={{
              position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)',
              padding: '5px 12px', borderRadius: 'var(--radius-full)',
              background: bg, color: '#fff',
              fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}>{label}</div>
          );
        })}
      </div>
    </div>
  );
}

function Part5Visual() {
  return (
    <div style={{
      padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: '100%', minHeight: '180px', background: 'linear-gradient(180deg, #f8faff 0%, #f8f9fc 100%)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        {/* Steps */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {['습관', '학습양', '효율', '전략'].map((step, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: [
                  'linear-gradient(135deg, #6c5ce7, #a29bfe)',
                  'linear-gradient(135deg, #4a6cf7, #74b9ff)',
                  'linear-gradient(135deg, #00b894, #55efc4)',
                  'linear-gradient(135deg, #e17055, #fab1a0)',
                ][i],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}>
                <span style={{ color: '#fff', fontSize: '14px', fontWeight: 800 }}>{i + 1}</span>
              </div>
              {i < 3 && (
                <iconify-icon icon="solar:arrow-right-linear" style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}></iconify-icon>
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['습관', '학습양', '효율', '전략'].map((step, i) => (
            <span key={step} style={{
              fontSize: '10px', fontWeight: 600,
              color: ['#6c5ce7', '#4a6cf7', '#00b894', '#e17055'][i],
              width: '42px', textAlign: 'center',
            }}>{step}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const visualMap = { 1: Part1Visual, 2: Part2Visual, 3: Part3Visual, 4: Part4Visual, 5: Part5Visual };

export default function Features() {
  const containerRef = useRevealAll();
  const navigate = useNavigate();

  return (
    <section id="diagnosis" style={{ padding: '120px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }} ref={containerRef}>
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px',
            background: 'var(--color-accent-soft)', color: 'var(--color-accent)',
            borderRadius: 'var(--radius-full)', fontSize: '13px', fontWeight: 600, marginBottom: '20px',
          }}>
            <iconify-icon icon="solar:star-bold" style={{ fontSize: '16px' }}></iconify-icon>
            성적 불변의 법칙
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: 700, lineHeight: 1.2,
            color: 'var(--color-text)', marginBottom: '16px', letterSpacing: '-0.02em',
          }}>
            왜 열심히 해도<br />성적은 제자리일까?
          </h2>
          <p style={{
            fontSize: '17px', color: 'var(--color-text-secondary)', lineHeight: 1.7,
            maxWidth: '500px', margin: '0 auto',
          }}>
            매번 기대하고 노력하지만 결과는 늘 같다면,<br />
            원인부터 정확히 파악해야 합니다.
          </p>
        </div>

        {/* Bento Grid: 2 large top */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
          {parts.filter(p => p.size === 'large').map((p, i) => {
            const Visual = visualMap[p.num];
            return (
              <div key={p.num} className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: '#fff', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)', overflow: 'hidden',
                  transition: 'all 0.3s ease', cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
                onClick={() => navigate(`/topic/${p.num}`)}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color + '50'; e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}14`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ borderBottom: '1px solid var(--color-border-light)', minHeight: '260px' }}><Visual /></div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em' }}>{p.title}</h3>
                    <iconify-icon icon="solar:arrow-right-up-linear" style={{ fontSize: '18px', color: p.color, flexShrink: 0 }}></iconify-icon>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{p.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row: 3 small */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {parts.filter(p => p.size === 'small').map((p, i) => {
            const Visual = visualMap[p.num];
            return (
              <div key={p.num} className={`reveal reveal-delay-${i + 3}`}
                style={{
                  background: '#fff', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)', overflow: 'hidden',
                  transition: 'all 0.3s ease', cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
                onClick={() => navigate(`/topic/${p.num}`)}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color + '50'; e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}14`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ borderBottom: '1px solid var(--color-border-light)' }}><Visual /></div>
                <div style={{ padding: '24px 24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em' }}>{p.title}</h3>
                    <iconify-icon icon="solar:arrow-right-up-linear" style={{ fontSize: '16px', color: p.color, flexShrink: 0 }}></iconify-icon>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{p.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
