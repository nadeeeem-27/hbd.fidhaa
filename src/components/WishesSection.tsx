import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Star, Gift as GiftBox, PartyPopper } from 'lucide-react';

const WishesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const wishes = [
    {
      icon: <Heart className="h-10 w-10 text-primary-500" fill="#ec4899" />,
      title: "Endless Love",
      description: "May our love continue to grow stronger and deeper with each passing day. You deserve all the love in the world."
    },
    {
      icon: <Star className="h-10 w-10 text-gold-500" fill="#f59e0b" />,
      title: "Dreams Come True",
      description: "May all your dreams and aspirations come to life. I'll be there cheering you on every step of the way."
    },
    {
      icon: <PartyPopper className="h-10 w-10 text-accent-500" />,
      title: "Joy & Happiness",
      description: "May your days be filled with laughter, joy, and beautiful moments that make your heart smile."
    },
    {
      icon: <GiftBox className="h-10 w-10 text-secondary-500" />,
      title: "My Promise",
      description: "I promise to stand by you, support you, respect you, and cherish every moment we share together."
    }
  ];

  return (
    <section id="wishes" className="section relative overflow-hidden bg-gradient-to-b from-white to-pink-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">My Wishes For You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fidhaa, here are my heartfelt wishes for you and for us.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 mx-auto mt-6"></div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6 shadow-xl backdrop-blur-md"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4">{wish.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{wish.title}</h3>
              <p className="text-gray-600">{wish.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div 
            className="glass p-8 rounded-xl shadow-xl"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-script text-primary-600 mb-4">My Special Wish</h3>
            <p className="text-lg text-gray-700 mb-6">
              Fidhaa, my greatest wish is to see you smile every day, to be the reason behind your happiness, and to build a beautiful life filled with love, laughter, and unforgettable moments together.
            </p>
            <motion.div
              className="text-center"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="h-12 w-12 text-primary-500 mx-auto" fill="#ec4899" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-8 w-16 h-16 rounded-full bg-primary-100 opacity-50"></div>
      <div className="absolute bottom-1/4 -right-8 w-16 h-16 rounded-full bg-gold-100 opacity-50"></div>
    </section>
  );
};

export default WishesSection;