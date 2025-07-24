import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Code, Database, Shield, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and technologies.",
      features: ["React & Next.js Development", "Full-Stack Solutions", "Progressive Web Apps", "API Integration"],
      price: "Starting at 30,000 ETB" 
    },
       {
      icon: Database,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your digital transformation.",
      features: ["AWS & Azure Setup", "Database Management", "Cloud Migration", "DevOps Implementation"],
      price: "Starting at 10,000 ETB"
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android Development", "React Native Solutions", "App Store Optimization", "Backend Integration"],
      price: "Starting at 25,000 ETB"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Innovative designs that blend aesthetics with functionality for maximum engagement.",
      features: ["User Experience Research", "Interface Design", "Prototyping", "Design Systems"],
      price: "Starting at 10,000 ETB"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements.",
      features: ["Enterprise Applications", "Automation Tools", "System Integration", "Legacy Modernization"],
      price: "Custom Quote"
    },
 
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business goals, target audience, and technical requirements."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive strategy and roadmap tailored to your specific needs."
    },
    {
      step: "03",
      title: "Design",
      description: "We create stunning designs and prototypes that bring your vision to life."
    },
    {
      step: "04",
      title: "Development",
      description: "Our developers build your solution using cutting-edge technologies and best practices."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing ensures your solution is bug-free and performs optimally."
    },
    {
      step: "06",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support to ensure continued success."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Services - Vyrran Technologies | Web Development & Digital Solutions</title>
        <meta name="description" content="Comprehensive technology services including web development, mobile apps, UI/UX design, cloud solutions, and cybersecurity." />
        <meta name="keywords" content="web development services, mobile app development, UI UX design, cloud solutions, cybersecurity, custom software" />
        <meta property="og:title" content="Services - Vyrran Technologies" />
        <meta property="og:description" content="Comprehensive technology services for modern businesses" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-cyber">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-cyber font-bold mb-6 text-foreground"
                variants={itemVariants}
              >
                Our <span className="text-primary">Services</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground font-futura max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Comprehensive technology solutions designed to accelerate your digital transformation 
                and drive business growth in the modern digital landscape.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-2xl font-cyber font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-futura leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-cyber font-semibold text-foreground mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground font-futura">
                            <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="text-lg font-cyber font-semibold text-primary mb-4">
                        {service.price}
                      </div>
                      
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-cyber">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-foreground"
                variants={itemVariants}
              >
                Our <span className="text-primary">Process</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground font-futura max-w-3xl mx-auto"
                variants={itemVariants}
              >
                A proven methodology that ensures project success from concept to deployment
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {process.map((step, index) => (
                <motion.div key={step.step} variants={itemVariants}>
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-6xl font-cyber font-bold text-primary/10">
                      {step.step}
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                          <span className="text-primary-foreground font-cyber font-bold text-sm">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-cyber font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-futura leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-foreground"
                variants={itemVariants}
              >
                Ready to Start Your <span className="text-primary">Project</span>?
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground font-futura mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Let's discuss your project requirements and create something amazing together. 
                Our team is ready to bring your vision to life with cutting-edge technology and innovative solutions.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-glow-intense transition-all duration-300 font-futura font-semibold px-8 py-3"
                >
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-futura font-semibold px-8 py-3"
                >
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;