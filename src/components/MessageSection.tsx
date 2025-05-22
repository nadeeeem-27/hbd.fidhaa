// import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MessageSection = () => {
  const { ref, inView: messageSectionInView } = useInView({ threshold: 0.3 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="message" ref={ref} className="section relative bg-white">
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={messageSectionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-4 gold-gradient-text"
            variants={itemVariants}
          >
            My Message To You
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 mx-auto mb-10"
            variants={itemVariants}
          />
          
          <div className="relative">
            <motion.img
              src="/IMG-20250522-WA0011.jpg"
              alt="Decorative heart"
              className="absolute -top-12 -left-12 w-24 h-24 object-cover rounded-full opacity-80 shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={messageSectionInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.div
              ref={textRef}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 md:p-12 rounded-xl shadow-xl relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
              
              <div className="relative z-10">
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Dearest Fidhaa,
                </motion.p>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  From the moment you entered my life, everything changed. Your smile brightens my darkest days, and your love gives me strength I never knew I had. Every moment with you feels like a beautiful dream I never want to wake up from.
                </motion.p>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Your kindness, intelligence, and the way you care for others inspire me every day. I cherish every laugh we share, every conversation we have, and even the comfortable silences between us.
                </motion.p>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Thank you for being you. Thank you for choosing to share your journey with me. I promise to stand by your side through all of life's adventures, to support your dreams, and to love you more each day.
                </motion.p>
                
                <motion.p 
                  className="text-2xl font-script text-primary-600 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Forever yours,
                </motion.p>
                
                <motion.p 
                  className="text-xl text-primary-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Nadeem
                </motion.p>
              </div>
            </motion.div>
            
            <motion.img
              src="/IMG-20250522-WA0005.jpg"
              alt="Decorative flowers"
              className="absolute -bottom-12 -right-12 w-24 h-24 object-cover rounded-full opacity-80 shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={messageSectionInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;