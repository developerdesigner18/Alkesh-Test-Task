import { useInView } from '../../hooks/useInView';

const Content = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-white text-2xl md:text-3xl font-light mb-8">
            Crafting Digital Experiences
          </h3>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              With over 15 years of experience in the design industry, I specialize in
              creating meaningful digital experiences that bridge the gap between form and
              function. My approach combines strategic thinking with meticulous
              craftsmanship to deliver solutions that resonate with audiences.
            </p>
            <p>
              From brand identity to web design, I work closely with clients to understand
              their vision and transform it into compelling visual narratives. Every project
              is an opportunity to push boundaries and challenge conventions while staying
              true to core design principles.
            </p>
            <p>
              My work has been recognized by industry leaders and featured in numerous
              publications. I believe in the power of design to shape perceptions, drive
              engagement, and create lasting impressions in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
