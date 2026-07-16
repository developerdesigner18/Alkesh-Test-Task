import { useInView } from '../../hooks/useInView';

const Profile = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div
            className={`w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 transition-all duration-1000 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Amit Garg - Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`text-center md:text-left transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-white text-2xl md:text-3xl font-light mb-2">
              Amit Garg
            </h3>
            <p className="text-gray-400 text-lg">Creative Director & Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
