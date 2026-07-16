import { useRef } from 'react';
import soulBrandImg from '../../assets/images/soul_brand.png';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Movie-credits scroll crawl — sequential version.
 *
 * The section is divided into one scroll "segment" per credit, in order.
 * Within its segment, a credit:
 *   - TITLE (first): is already on screen, then scrolls straight up and
 *     off the top as its segment plays out (no entrance needed).
 *   - MIDDLE credits: start below the viewport (invisible), slide
 *     straight up through the screen as their segment plays out, and
 *     exit off the top — at which point the NEXT credit's segment
 *     begins and it starts entering from the bottom. Only one credit is
 *     travelling through the screen at a time.
 *   - LAST credit: enters from the bottom same as a middle credit, but
 *     once it reaches the vertical center of the screen it stops there
 *     and holds for the rest of its segment (the "scrollable till the
 *     middle, then it stays" ending).
 *
 * To add more lines, add more entries to CREDITS and (optionally) a
 * matching weight in SEGMENT_WEIGHTS — everything else adapts.
 */
const CREDITS = [
  {
    id: 'title',
    // Anchored near the top-left; only ever translates upward to exit.
    position: 'top-10 sm:top-12 md:top-14 lg:top-16 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20',
    align: 'text-left',
    lines: [
      { text: 'The Soul Behind', size: 'text-[32px] xs:text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] xl:text-[72px]' },
      { text: 'the Brand', size: 'text-[32px] xs:text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] xl:text-[72px]' },
    ],
  },
  {
    id: 'observing',
    position: 'top-1/2 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20',
    align: 'text-left',
    lines: [
      { text: "When I'm not building, I'm observing", size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
      { text: '— people, silence, stories.', size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
    ],
  },
  {
    id: 'clarity',
    position: 'top-1/2 left-4 sm:left-auto sm:right-8 md:right-12 lg:right-16 xl:right-20',
    align: 'text-left',
    lines: [
      { text: 'I find clarity in long drives, in chai over', size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
      { text: 'deep conversations, in music that', size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
      { text: 'feels like truth.', size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
    ],
  },
  {
    id: 'alignment',
    position: 'top-1/2 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20',
    align: 'text-left',
    lines: [
      { text: "I've realized success doesn't come", size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
      { text: 'from balance — it comes from', size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
      { text: 'alignment.', size: 'text-[18px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px]' },
    ],
  },
];

// --- Tuning knobs -----------------------------------------------------
// Relative share of the total scroll each credit's own segment gets, in
// order. Equal by default — raise one to give that credit a slower,
// longer crawl through the screen relative to the others.
const SEGMENT_WEIGHTS = [1, 1, 1, 1];
// How far a travelling credit goes above/below the viewport, as a
// fraction of viewport height. 0.7 comfortably clears the screen edges.
const TRAVEL_VH_FACTOR = 0.7;
// Portion of a middle credit's segment used for the opacity fade in/out
// at each edge (the middle portion in between stays fully opaque).
const FADE_FRACTION = 0.5;
// Total scrollable height of the section. More vh = slower, longer crawl.
const SECTION_HEIGHT_VH = 500;
// -----------------------------------------------------------------------

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const SoulBehind = () => {
  const sectionRef = useRef(null);
  const [progress, viewportHeight] = useScrollProgress(sectionRef);

  const n = CREDITS.length;
  const weightSum = SEGMENT_WEIGHTS.reduce((a, w) => a + w, 0) || 1;

  // Cumulative, non-overlapping [start, end) progress range per credit —
  // one credit finishes its travel exactly as the next one begins.
  const segments = [];
  let cursor = 0;
  for (let i = 0; i < n; i += 1) {
    const width = (SEGMENT_WEIGHTS[i] ?? 1) / weightSum;
    segments.push({ start: cursor, end: cursor + width });
    cursor += width;
  }

  const TRAVEL = viewportHeight * TRAVEL_VH_FACTOR;

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${SECTION_HEIGHT_VH}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={soulBrandImg}
            alt="Alkesh Gupta"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Credits crawl */}
        <div className="relative z-10 h-full">
          {CREDITS.map((credit, i) => {
            const { start, end } = segments[i];
            const localP = clamp((progress - start) / (end - start || 1), 0, 1);

            let transform;
            let opacity;

            if (i === 0) {
              // TITLE: no entrance, exits straight up as its segment plays out.
              const translatePx = -TRAVEL * localP;
              transform = `translateY(${translatePx}px)`;
              opacity = localP < 0.6 ? 1 : clamp(1 - (localP - 0.6) / 0.4, 0, 1);
            } else if (i === n - 1) {
              // LAST credit: travels from below up to center, then holds there.
              const raw = TRAVEL * (1 - 2 * localP);
              const offsetPx = Math.max(0, raw);
              transform = `translateY(calc(-50% + ${offsetPx}px))`;
              opacity = localP < 0.4 ? localP / 0.4 : 1;
            } else {
              // MIDDLE credits: full bottom-to-top travel through the screen.
              const offsetPx = TRAVEL * (1 - 2 * localP);
              transform = `translateY(calc(-50% + ${offsetPx}px))`;
              const distanceFromCenter = Math.abs(localP - 0.5) * 2; // 0 center, 1 edges
              opacity =
                distanceFromCenter < 1 - FADE_FRACTION
                  ? 1
                  : clamp(1 - (distanceFromCenter - (1 - FADE_FRACTION)) / FADE_FRACTION, 0, 1);
            }

            return (
              <div
                key={credit.id}
                className={`absolute max-w-[calc(100vw-32px)] ${credit.position} ${credit.align}`}
                style={{
                  transform,
                  opacity,
                  willChange: 'transform, opacity',
                  pointerEvents: opacity > 0.05 ? 'auto' : 'none',
                }}
              >
                {credit.lines.map((line, idx) => (
                  <p
                    key={idx}
                    className={`font-[family-name:var(--font-altone)] text-[#F5F5F5] ${line.size} font-medium leading-[1.3] sm:leading-[1.2]`}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoulBehind;