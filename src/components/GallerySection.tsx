import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Image gallery for memories
const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  // Sample images - replace with actual images of you and Fidhaa
  const images = [
    {
      src: "/we.jpg",
      alt: "Couple holding hands",
      caption: "I love you"
    },
    {
      src: "/IMG-20250522-WA0005.jpg",
      alt: "Couple enjoying sunset",
      caption: "Beautiful You"
    },
    {
      src: "IMG-20250522-WA0008.jpg",
      alt: "Couple laughing",
      caption: "Nta kutty"
    },
    {
      src: "/IMG-20250522-WA0006.jpg",
      alt: "Couple at dinner",
      caption: "Unniyal Beach🌚"
    },
    {
      src: "/clg.jpg",
      alt: "Couple walking",
      caption: "College we"
    },
    {
      src: "/IMG-20250522-WA0010.jpg",
      alt: "Couple in nature",
      caption: "Kozhikode beach pova?"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="gallery" className="section bg-secondary-50 py-20 relative overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">Our Beautiful Memories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every moment with you is a treasure I keep close to my heart. Here are some of our special memories together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 mx-auto mt-6"></div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-[300px] object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-medium mb-2">{image.caption}</h3>
                  <p className="text-white/80 text-sm">My lovely Fidhaa</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-primary-100 opacity-50"></div>
      <div className="absolute top-1/3 -right-8 w-16 h-16 rounded-full bg-secondary-100 opacity-50"></div>
    </section>
  );
};

export default GallerySection;