import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { partsData } from '../data/parts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Accordion({ item, depth = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: depth === 0 ? '12px' : '8px' }}>
      {/* Question row */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: depth === 0 ? '20px 24px' : '14px 20px',
          background: open ? 'var(--color-accent-soft)' : '#fff',
          border: `1px solid ${open ? 'var(--color-accent-light)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        {/* ID badge */}
        <span style={{
          padding: '3px 10px',
          borderRadius: 'var(--radius-full)',
          background: open ? 'var(--color-accent)' : 'var(--color-bg-muted)',
          color: open ? '#fff' : 'var(--color-text-tertiary)',
          fontSize: '11px',
          fontWeight: 700,
          flexShrink: 0,
          transition: 'all 0.2s ease',
        }}>
          {item.id}
        </span>

        {/* Question text */}
        <span style={{
          flex: 1,
          fontSize: depth === 0 ? '15px' : '14px',
          fontWeight: depth === 0 ? 600 : 500,
          color: open ? 'var(--color-accent)' : 'var(--color-text)',
          lineHeight: 1.5,
          transition: 'color 0.2s ease',
        }}>
          {item.question}
        </span>

        {/* Arrow */}
        <iconify-icon
          icon="solar:alt-arrow-down-linear"
          style={{
            fontSize: '18px',
            color: open ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        ></iconify-icon>
      </button>

      {/* Answer area */}
      <div style={{
        maxHeight: open ? '2000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          padding: '20px 24px',
          margin: '4px 0 0',
          background: 'var(--color-bg-soft)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-light)',
        }}>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.8,
          }}>
            {item.answer}
          </p>

          {/* Sub-questions */}
          {item.sub && item.sub.length > 0 && (
            <div style={{ marginTop: '16px', paddingLeft: '8px', borderLeft: '2px solid var(--color-accent-soft)' }}>
              {item.sub.map((sub) => (
                <Accordion key={sub.id} item={sub} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PartPage() {
  const { partNum } = useParams();
  const navigate = useNavigate();
  const part = partsData[partNum];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [partNum]);

  if (!part) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '200px 24px 120px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', marginBottom: '16px' }}>
            페이지를 찾을 수 없습니다
          </h1>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '12px 24px',
              background: 'var(--color-accent)',
              color: '#fff',
              borderRadius: 'var(--radius-full)',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            홈으로 돌아가기
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const partNums = Object.keys(partsData).map(Number);
  const currentIdx = partNums.indexOf(Number(partNum));
  const prevPart = currentIdx > 0 ? partNums[currentIdx - 1] : null;
  const nextPart = currentIdx < partNums.length - 1 ? partNums[currentIdx + 1] : null;
  const prevData = prevPart ? partsData[prevPart] : null;
  const nextData = nextPart ? partsData[nextPart] : null;

  return (
    <>
      <Navbar />

      {/* Hero header */}
      <section style={{
        padding: '160px 24px 80px',
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border-light)',
      }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              background: 'var(--color-bg-muted)',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              marginBottom: '32px',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              border: 'none',
              fontFamily: 'inherit',
            }}
          >
            <iconify-icon icon="solar:arrow-left-linear" style={{ fontSize: '16px' }}></iconify-icon>
            홈으로 돌아가기
          </button>

          {/* Topic badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: `${part.color}12`,
            color: part.color,
            borderRadius: 'var(--radius-full)',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            <iconify-icon icon={part.icon} style={{ fontSize: '16px' }}></iconify-icon>
            성적 진단 {partNum}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            {part.title}
          </h1>
          <p style={{
            fontSize: '17px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}>
            {part.answer}
          </p>
        </div>
      </section>

      {/* Q&A Section */}
      <section style={{ padding: '64px 24px 120px', background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--color-text-tertiary)',
            marginBottom: '24px',
          }}>
            {part.questions.length}개의 Q&A
          </div>

          {part.questions.map((q) => (
            <Accordion key={q.id} item={q} />
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section style={{
        padding: '48px 24px',
        background: 'var(--color-bg-soft)',
        borderTop: '1px solid var(--color-border-light)',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          {prevPart ? (
            <button
              onClick={() => navigate(`/topic/${prevPart}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'inherit',
                textAlign: 'left',
                maxWidth: '45%',
              }}
            >
              <iconify-icon icon="solar:arrow-left-linear" style={{ fontSize: '16px', flexShrink: 0 }}></iconify-icon>
              <span style={{ fontSize: '13px', lineHeight: 1.4 }}>{prevData.title}</span>
            </button>
          ) : <div />}

          {nextPart ? (
            <button
              onClick={() => navigate(`/topic/${nextPart}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                background: 'var(--color-accent)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'inherit',
                textAlign: 'left',
                maxWidth: '45%',
              }}
            >
              <span style={{ fontSize: '13px', lineHeight: 1.4 }}>{nextData.title}</span>
              <iconify-icon icon="solar:arrow-right-linear" style={{ fontSize: '16px', flexShrink: 0 }}></iconify-icon>
            </button>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </>
  );
}
