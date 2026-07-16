import { useRef } from 'react';
import { motion } from 'framer-motion';
import ReactSlick from 'react-slick';
import { ArrowUpRight } from 'lucide-react';

const Slider = ReactSlick.default || ReactSlick;
import reviewPpl1 from '../../assets/images/review_ppl1.png';
import reviewPpl2 from '../../assets/images/review_ppl2.png';
import reviewPpl3 from '../../assets/images/review_ppl3.png';
import reviewPpl4 from '../../assets/images/review_ppl4.png';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "He Understands People — And That Changes Everything.",
    name: 'Dr. Gaikwad',
    role: 'The Smile Architect',
    image: reviewPpl1,
  },
  {
    id: 2,
    quote: "Working With Alkesh Doesn't Feel Like Outsourcing. It Feels Like Building Together.",
    name: 'Suman Vyas',
    role: 'Project Head, DigiHost',
    image: reviewPpl2,
  },
  {
    id: 3,
    quote: "He Never Talks About Trends. He Talks About Truth. And Somehow, That Always Works.",
    name: 'Siddhant Jadhav',
    role: 'Graphics & Content Lead',
    image: reviewPpl3,
  },
  {
    id: 4,
    quote: "Working With Alkesh Feels Like Having A Creative Partner, Not Just A Designer.",
    name: 'Priya Sharma',
    role: 'Marketing Head',
    image: reviewPpl4,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 10,
    variableWidth: true,
    centerMode: false,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="bg-white py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-altone)] text-[#1a1a1a] text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] mb-8 sm:mb-12 md:mb-16"
        >
          What People Say
        </motion.h2>

        {/* Slick Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Slider ref={sliderRef} {...settings}>
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="px-2 sm:px-3 md:px-4">
                <div className="w-[240px] sm:w-[260px] md:w-[300px] lg:w-[340px]">
                  {/* Quote */}
                  <p className="font-[family-name:var(--font-altone)] text-[#151515] text-[16px] sm:text-[18px] md:text-[20px] leading-[120%] capitalize mb-4 sm:mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-altone)] text-[#355450] text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[120%] capitalize">
                        {testimonial.name}
                      </p>
                      <p className="font-[family-name:var(--font-altone)] text-[#151515] text-[12px] sm:text-[14px] md:text-[16px] font-medium leading-[120%] capitalize">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* More button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 sm:mt-16 md:mt-20"
        >
          <motion.div
            className="flex items-center gap-1 sm:gap-2 border border-[#5C5C5C] rounded-full px-2 sm:px-3 py-1.5 sm:py-2 cursor-pointer h-[48px] sm:h-[56px] md:h-[68px]"
            whileHover={{ backgroundColor: '#f5f5f5' }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Small profile pics */}
            <div className="flex -space-x-1 sm:-space-x-1.5 md:-space-x-2">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white"
                >
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="font-[family-name:var(--font-altone)] text-[#5C5C5C] text-[12px] sm:text-[14px] md:text-[20px] font-medium leading-[100%] ml-1 sm:ml-2">
              More
            </span>
            <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full bg-[#355450] flex items-center justify-center ml-auto p-1.5 sm:p-2 md:p-3">
              <ArrowUpRight className="w-full h-full text-white" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
