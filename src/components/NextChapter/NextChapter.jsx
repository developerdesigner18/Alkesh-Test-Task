import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';

const LINE_HEIGHT = {
  mobile: 36,
  tablet: 52,
  desktop: 78,
};

const BLOCK_GAP = {
  mobile: 40,
  tablet: 56,
  desktop: 80,
};

const BLOCKS = [
  {
    id: 1,
    lines: [
      "My Next Chapter Is About Building With People,",
      "Not Just For Them.",
    ],
  },
  {
    id: 2,
    showButton: true,
    lines: [
      "Through The Bharat Building Mission,",
      "I\u2019m Creating A Community Of Founders",
      "From Every Corner Of India \u2013 Tier 2, Tier 3,",
      "And Beyond",
    ],
  },
  {
    id: 3,
    lines: [
      "Who Want To Grow With Purpose, Not Pressure.",
      "Because Someday, When Someone Says",
      "\u201CBharat Is Rising,\u201D",
      "I Want To Know",
      "We Helped Build That Rise, With Soul.",
    ],
  },
];

const NextChapter = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const sectionRef = useRef(null);
  const [highlightedLines, setHighlightedLines] = useState(new Set());
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lineHeight = windowWidth < 640 ? LINE_HEIGHT.mobile : windowWidth < 1024 ? LINE_HEIGHT.tablet : LINE_HEIGHT.desktop;
  const blockGap = windowWidth < 640 ? BLOCK_GAP.mobile : windowWidth < 1024 ? BLOCK_GAP.tablet : BLOCK_GAP.desktop;

  const lineOffsets = useMemo(() => {
    const offsets = [];
    let offset = 0;
    BLOCKS.forEach((block, blockIndex) => {
      block.lines.forEach(() => {
        offsets.push(offset);
        offset += lineHeight;
      });
      if (blockIndex < BLOCKS.length - 1) {
        offset += blockGap;
      }
    });
    return offsets;
  }, [lineHeight, blockGap]);

  const totalHeight = useMemo(() => {
    const linesHeight = BLOCKS.reduce((sum, b) => sum + b.lines.length, 0) * lineHeight;
    const gapsHeight = (BLOCKS.length - 1) * blockGap;
    return linesHeight + gapsHeight;
  }, [lineHeight, blockGap]);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const contentTop = rect.top + (rect.height - totalHeight) / 2;
    const y = e.clientY - contentTop;

    for (let i = 0; i < lineOffsets.length; i++) {
      if (y >= lineOffsets[i] && y < lineOffsets[i] + lineHeight) {
        setHighlightedLines((prev) => new Set([...prev, i]));
        break;
      }
    }
  }, [lineOffsets, totalHeight, lineHeight]);

  let globalIndex = 0;

  return (
    <section
      id="next-chapter"
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className="bg-[#f5f5f5] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Top divider */}
      <div className="w-full h-[1px] bg-[#d9d9d9]" />

      <div className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div
          className={`max-w-[1440px] mx-auto transition-all duration-700 relative ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {BLOCKS.map((block, blockIndex) => {
            const lines = block.lines.map((text) => {
              const lineGlobalIndex = globalIndex;
              globalIndex++;
              return { text, lineGlobalIndex };
            });

            return (
              <div
                key={block.id}
                style={{
                  marginBottom: blockIndex < BLOCKS.length - 1 ? `${blockGap}px` : 0,
                }}
              >
                {lines.map(({ text, lineGlobalIndex }, lineIdx) => (
                  <div
                    key={lineGlobalIndex}
                    className="relative flex items-center justify-center"
                    style={{ height: `${lineHeight}px` }}
                  >
                    {/* Unrevealed text */}
                    <p className="font-[family-name:var(--font-anton)] text-[#d9d9d9] text-[18px] sm:text-[24px] md:text-[36px] lg:text-[52px] xl:text-[64px] leading-[100%] capitalize text-center w-full px-4 select-none">
                      {text}
                    </p>

                    {/* Revealed text */}
                    <p
                      className="font-[family-name:var(--font-anton)] text-[18px] sm:text-[24px] md:text-[36px] lg:text-[52px] xl:text-[64px] leading-[100%] capitalize text-center w-full px-4 absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                      style={{
                        background: 'linear-gradient(to right, #31504c 50%, transparent 50%)',
                        backgroundSize: '200% 100%',
                        backgroundPosition: highlightedLines.has(lineGlobalIndex) ? '0% 0' : '100% 0',
                        transition: 'background-position 1.4s ease-out',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {text}
                    </p>

                    {/* Join Mission Button - on first line of block 2 */}
                    {block.showButton && lineIdx === 0 && (
                      <div className="absolute right-2 sm:right-4 md:right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 pointer-events-auto">
                        <div
                          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                          style={{
                            background: '#151515',
                            border: '2px solid transparent',
                            backgroundImage: 'linear-gradient(#151515, #151515), linear-gradient(98.41deg, #F8EEA4 10.77%, #C7A008 93.44%)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                            padding: '6px',
                          }}
                        >
                          <span className="font-[family-name:var(--font-altone)] text-white text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-medium text-center leading-[110%]">
                            Join<br />Mission
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="w-full h-[1px] bg-[#d9d9d9]" />
    </section>
  );
};

export default NextChapter;
