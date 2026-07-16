import { motion } from 'framer-motion';
import storyBg from '../../assets/images/story.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MyStory = () => {
  return (
    <section className="bg-white py-10 sm:py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Outer wrapper with gradient border */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="rounded-[12px] sm:rounded-[16px] p-[2px]"
          style={{
            background: 'linear-gradient(98.41deg, #F8EEA4 10.77%, #C7A008 93.44%)',
          }}
        >
          {/* Inner box with image */}
          <div
            className="relative w-full rounded-[10px] sm:rounded-[14px] overflow-hidden"
            style={{
              minHeight: '250px',
              backgroundImage: `url(${storyBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-[family-name:var(--font-kaushan)] text-white/80 text-[20px] sm:text-[26px] md:text-[34px] lg:text-[36px] leading-[140%] capitalize text-center max-w-[661px] mb-4 sm:mb-6"
              >
                This Is Not My Story,
                <br />
                It&apos;s A Reminder,
                <br />
                That Every Founder&apos;s Story Can Have A Soul.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[14px] sm:text-[16px] md:text-[20px] leading-[120%] capitalize text-center"
                style={{
                  fontFamily: 'var(--font-altone)',
                  fontWeight: 500,
                  background: 'linear-gradient(98.8deg, #F8EEA4 33.68%, #C7A008 93.48%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                - Alkesh Gupta
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyStory;
