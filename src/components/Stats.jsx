import { useEffect, useState, useRef } from 'react';

const stats = [
  { label: '관리 학생', value: 4800, suffix: '+', icon: 'solar:users-group-two-rounded-bold', color: '#6c5ce7' },
  { label: '학부모', value: 3200, suffix: '+', icon: 'solar:heart-bold', color: '#e17055' },
  { label: '성적 향상률', value: 94.2, suffix: '%', decimal: true, icon: 'solar:graph-up-bold', color: '#00b894' },
  { label: '전문 튜터', value: 50, suffix: '+', icon: 'solar:square-academic-cap-bold', color: '#4a6cf7' },
];

function formatNumber(n) {
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

export default function Stats() {
  return (
    <section style={{ padding: '0', background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border-light)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--container-padding)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px',
      }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: 'center', padding: '24px 16px' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '16px', background: `${s.color}12`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px', color: s.color, fontSize: '24px',
            }}>
              <iconify-icon icon={s.icon}></iconify-icon>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 700,
              color: 'var(--color-text)', letterSpacing: '-0.02em', marginBottom: '6px', display: 'block',
            }}>
              <AnimatedNumber value={s.value} suffix={s.suffix} decimal={s.decimal} />
            </span>
            <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
