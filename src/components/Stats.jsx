import { useEffect, useState, useRef } from 'react';

const stats = [
  { label: '활성 사용자', value: 52000, suffix: '+', icon: 'solar:users-group-two-rounded-bold' },
  { label: '답변 완료', value: 1200000, suffix: '+', icon: 'solar:chat-round-dots-bold' },
  { label: '평균 만족도', value: 98.7, suffix: '%', decimal: true, icon: 'solar:star-bold' },
  { label: '전문 튜터', value: 3400, suffix: '+', icon: 'solar:graduation-cap-bold' },
];

function formatNumber(n) {
  if (n >= 1000000) return (n / 10000).toLocaleString('ko-KR') + '만';
  if (n >= 10000) return (n / 10000).toFixed(1) + '만';
  return n.toLocaleString('ko-KR');
}

function AnimatedNumber({ value, suffix, decimal }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const startTime = performance.now();

        function animate(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setCurrent(decimal ? +(value * eased).toFixed(1) : Math.floor(value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimal]);

  const display = decimal ? current.toFixed(1) : formatNumber(current);
  return <span ref={ref}>{display}{suffix}</span>;
}

const sectionStyle = {
  padding: '0',
  background: 'var(--color-bg)',
  borderBottom: '1px solid var(--color-border-light)',
};

const innerStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '64px var(--container-padding)',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '32px',
};

const statItemStyle = {
  textAlign: 'center',
  padding: '24px 16px',
};

const iconWrapStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '14px',
  background: 'var(--color-accent-soft)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  color: 'var(--color-accent)',
  fontSize: '22px',
};

const valueStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '36px',
  fontWeight: 700,
  color: 'var(--color-text)',
  letterSpacing: '-0.02em',
  marginBottom: '6px',
  display: 'block',
};

const labelStyle = {
  fontSize: '14px',
  color: 'var(--color-text-secondary)',
  fontWeight: 500,
};

export default function Stats() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        {stats.map((s) => (
          <div key={s.label} style={statItemStyle}>
            <div style={iconWrapStyle}>
              <iconify-icon icon={s.icon}></iconify-icon>
            </div>
            <span style={valueStyle}>
              <AnimatedNumber value={s.value} suffix={s.suffix} decimal={s.decimal} />
            </span>
            <span style={labelStyle}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
