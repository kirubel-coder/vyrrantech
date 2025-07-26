import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Smartphone, Palette, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/herobg.png';
import { Helmet } from 'react-helmet-async';
import Movierating1 from '@/assets/movierating1.png';
import Closet1 from '@/assets/closet1.png'
import Danat1 from '@/assets/danat1.png'

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Cutting-edge websites built with modern technologies and frameworks for optimal performance."
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Appealing and easy feeling User interfaces that deliver exceptional user experiences."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Innovative designs that blend aesthetics with functionality for maximum user engagement."
    }
  ];

  const projects = [
    {
      title: "Movie Rating Website for Amharic movies",
      description: "A futuristic movie rating website that allows Ethiopians to rate their movies",
      tech: ["React", "Node.js", "MongoDB"],
      image: Movierating1
    },
    {
      title: "Shopping Website | WebApp",
      description: "Expert level shopping website /WebApp ",
      tech: ["react.js", "TypeScript", "mongoDB"],
      image: Closet1
    },
    {
      title: "Company Landing page",
      description: "A Landing page for a company called Danat P.L.C",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      image: Danat1
    }
  ];

  const testimonials = [
    {
      name: "Sara Abera",
      company: "International Hotel",
      quote: "Vyrran Tech transformed our digital presence completely. Their innovative approach and attention to detail exceeded all expectations.",
      rating: 5
    },
    {
      name: "Mandefro Bekele",
      company: "Innovation Labs",
      quote: "Working with Vyrran was a game changer. They delivered a cutting-edge solution that positioned us ahead of our competition.",
      rating: 5
    },
    {
      name: "Ermias Waqjira",
      company: "Educational Consultancy",
      quote: "The team's expertise in modern web technologies is unmatched. They created exactly what we needed and more.",
      rating: 5
    }
  ];

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
        <title>Vyrran Technologies - Futuristic Web Development Solutions</title>
        <meta name="description" content="Cutting-edge web development, web design, and digital solutions. Transform your business with our innovative technology solutions." />
        <meta name="keywords" content="web development, web design, UI/UX design, technology solutions, software development" />
        <meta property="og:title" content="Vyrran Technologies - Futuristic Web Development Solutions" />
        <meta property="og:description" content="Cutting-edge web development and digital solutions for the future" />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-cyber font-bold mb-6 text-foreground"
            variants={itemVariants}
          >
            <span className="text-primary">Ideas Spark</span>, We{' '}
            <span className="bg-gradient-neon bg-clip-text text-transparent">Make them real</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-futura leading-relaxed"
            variants={itemVariants}
          >
            Building next level websites with cutting-edge technology,
            User Friendly design, and excellent performance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-glow-intense transition-all duration-300 font-futura font-semibold px-8 py-3"
            >
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
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

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-neon-cyan rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-6 h-6 bg-neon-green rounded-full opacity-40"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Services Section */}
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
              Our <span className="text-primary">Services</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground font-futura max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We specialize in creating digital experiences that push the boundaries of what's possible
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-cyber font-semibold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-futura leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20">
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
              Recent <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground font-futura max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Showcasing our latest innovations and cutting-edge solutions
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-cyber font-semibold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-futura mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-futura rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-futura"
            >
              <Link to="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Client <span className="text-primary">Testimonials</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground font-futura max-w-3xl mx-auto"
              variants={itemVariants}
            >
              What our clients say about working with us
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={itemVariants}>
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground font-futura mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-cyber font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary text-sm font-futura">
                      {testimonial.company}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;