import { useState, useCallback, useRef, forwardRef, useImperativeHandle, useEffect } from 'react';

/**
 * RevealText — hover-to-reveal heading with a "ladder" composition.
 */
const RevealText = forwardRef(function RevealText(
  { lines = [], highlights = [], ladder = 'none', ladderStep = 48, ladderStepMd, className = '' },
  ref
) {
  const [revealed, setRevealed] = useState(() => new Array(lines.length).fill(false));
  const lineRefs = useRef([]);
  const [hasLadder, setHasLadder] = useState(false);

  useEffect(() => {
    const check = () => setHasLadder(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const revealLine = useCallback((index) => {
    setRevealed((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      revealAtY(clientY) {
        const lineEls = lineRefs.current;
        let nearestIndex = -1;
        let nearestDistance = Infinity;

        for (let i = 0; i < lineEls.length; i++) {
          const el = lineEls[i];
          if (!el) continue;
          const rect = el.getBoundingClientRect();

          if (clientY >= rect.top && clientY <= rect.bottom) {
            revealLine(i);
            return;
          }

          const distance = clientY < rect.top ? rect.top - clientY : clientY - rect.bottom;
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = i;
          }
        }

        if (nearestIndex !== -1) revealLine(nearestIndex);
      },
    }),
    [revealLine]
  );

  const isHighlightWord = (word) =>
    highlights.some((h) => h.toLowerCase() === word.toLowerCase().replace(/[^a-z]/g, ''));

  const renderWords = (lineText) => {
    const words = lineText.split(' ');
    return words.map((word, i) => (
      <span key={i}>
        <span style={{ fontWeight: isHighlightWord(word) ? 700 : 500 }}>{word}</span>
        {i < words.length - 1 && ' '}
      </span>
    ));
  };

  const lastIndex = lines.length - 1;

  const getLadderStep = () => {
    if (ladderStepMd !== undefined && typeof window !== 'undefined') {
      return window.innerWidth >= 1280 ? ladderStep : ladderStepMd;
    }
    return ladderStep;
  };

  return (
    <div className={`relative w-full ${className}`}>
      {lines.map((lineText, i) => {
        const baseStyle = {
          background: 'linear-gradient(to right, #FFFFFF 50%, #9AA8A6 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: revealed[i] ? '0% 0' : '100% 0',
          transition: 'background-position 1s ease-out',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        };

        const currentStep = getLadderStep();

        let lineStyle;
        let wrapperClass;

        // Below md: always centered, no ladder, allow wrapping
        if (!hasLadder) {
          lineStyle = { ...baseStyle, textAlign: 'center' };
          wrapperClass = 'w-fit mx-auto';
        } else if (ladder === 'right') {
          lineStyle = { ...baseStyle, textAlign: 'left', marginLeft: `${i * currentStep}px` };
          wrapperClass = 'whitespace-nowrap';
        } else if (ladder === 'left') {
          lineStyle = { ...baseStyle, textAlign: 'left', marginLeft: `${(lastIndex - i) * currentStep}px` };
          wrapperClass = 'whitespace-nowrap';
        } else {
          lineStyle = { ...baseStyle, textAlign: 'center' };
          wrapperClass = 'w-fit mx-auto whitespace-nowrap';
        }

        return (
          <div
            key={i}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className="relative w-full overflow-hidden"
            onMouseEnter={() => revealLine(i)}
          >
            <p
              className={`font-[family-name:var(--font-altone)] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] leading-[1.5] md:leading-[1.5] lg:leading-[1.4] xl:leading-[1.3] tracking-[-0.02em] font-medium ${wrapperClass}`}
              style={lineStyle}
            >
              {renderWords(lineText)}
            </p>
          </div>
        );
      })}
    </div>
  );
});

export default RevealText;
