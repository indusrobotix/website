import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCogs, FaGraduationCap, FaIndustry, FaShippingFast, FaTools } from 'react-icons/fa';
import { useBusiness } from '../../contexts/BusinessContext';
import Button from '../UI/Button';
import Card from '../UI/Card';
import GearAnimation from '../UI/GearAnimation';
import { products } from '../../data/products.data';

const Home: React.FC = () => {
  const { businessInfo } = useBusiness();

  useEffect(() => {
    // Update document title
    document.title = `Home | ${businessInfo.name}`;
  }, [businessInfo.name]);

  const features = [
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: 'Local Sourcing',
      description: 'Supporting Pakistan\'s economy with locally sourced components for better availability and reduced costs.'
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: 'Custom Acrylic Chassis',
      description: 'Precision-designed acrylic chassis providing durability and flexibility for custom robotic applications.'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'STEM Education Focus',
      description: 'Kits designed specifically for Pakistani students and educators to enhance robotics and STEM learning.'
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensuring reliable performance for all our robotic kits.'
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: 'Custom Solutions',
      description: 'Tailored robotic solutions to meet specific requirements of educational institutions and businesses.'
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: 'Technical Support',
      description: 'Comprehensive technical support and documentation for all our products.'
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden bg-gradient-to-br from-dark-blue via-primary-blue to-secondary-teal text-white">
        <div className="absolute inset-0 opacity-10">
          <GearAnimation size="large" className="absolute top-1/4 left-1/4" />
          <GearAnimation size="medium" className="absolute bottom-1/4 right-1/4" />
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building <span className="text-light-teal">Pakistan's</span> Robotics Future
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Custom robotic kits with precision-designed acrylic chassis. Empowering students, 
              educators, and innovators across Pakistan with accessible robotics technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="large"
                icon={<FaRobot />}
                onClick={() => window.location.href = '/products'}
              >
                View Our Kits
              </Button>
              <Button 
                variant="outline" 
                size="large"
                icon={<FaGraduationCap />}
                onClick={() => window.location.href = '/services'}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-blue mb-4">
              Why Choose IndusRoboTix
            </h2>
            <p className="text-xl text-metal-gray max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver 
              the best robotics solutions in Pakistan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-blue/10 text-primary-blue mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-metal-gray">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-blue mb-4">
              Featured Robotic Kits
            </h2>
            <p className="text-xl text-metal-gray max-w-3xl mx-auto">
              Explore our range of custom robotic kits designed for different skill levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48 bg-gradient-to-r from-metal-gray to-dark-blue flex items-center justify-center">
                    <FaRobot className="text-6xl text-white" />
                    <span className="absolute top-4 right-4 bg-secondary-teal text-white px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-blue mb-2">
                      {product.name}
                    </h3>
                    <p className="text-metal-gray mb-4">
                      {product.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary-blue">
                          {product.currency} {product.price.toLocaleString()}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-500'
                                  : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                          <span className="ml-2 text-sm text-metal-gray">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => window.location.href = `/products#${product.id}`}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="secondary"
              size="large"
              onClick={() => window.location.href = '/products'}
            >
              View All Products
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-secondary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Robotics Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of students, educators, and innovators who trust IndusRoboTix 
              for their robotics needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white hover:text-primary-blue"
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch
              </Button>
              <Button
                variant="secondary"
                size="large"
                className="bg-light-teal text-dark-blue hover:bg-white"
                onClick={() => window.location.href = '/services'}
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
