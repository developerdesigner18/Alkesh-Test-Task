import { useInView } from '../../hooks/useInView';

const Quote = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-[1px] bg-white/30" />
          </div>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide">
            The Strongest Steel Is
            <br />
            <span className="italic">forged Through</span>
            <br />
            the Strongest Fire
          </h2>
          <div className="flex justify-center mt-8">
            <div className="w-16 h-[1px] bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
