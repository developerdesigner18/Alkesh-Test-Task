import { useInView } from '../../hooks/useInView';
import { AWARDS } from '../../constants';

const Awards = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3
          className={`text-white text-xl md:text-2xl font-light mb-12 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Awards & Recognition
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {AWARDS.map((award, index) => (
            <div
              key={award.id}
              className={`w-full aspect-square bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-gray-500 text-sm">{award.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
