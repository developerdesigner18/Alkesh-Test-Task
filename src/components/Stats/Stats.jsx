import { useInView } from '../../hooks/useInView';
import { STATS } from '../../constants';

const Stats = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-white text-3xl md:text-5xl lg:text-6xl font-light mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
