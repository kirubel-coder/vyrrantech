import { motion } from 'framer-motion';
import { Target, Eye, Zap, Users, Award, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import ceoImage from '@/assets/upworkPfpCropped2.jpg';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We push the boundaries of technology to create solutions that didn't exist yesterday."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that exceeds expectations."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We create digital solutions that make a meaningful difference in the world."
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
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
        <title>About Vyrran Technologies - Our Story & Vision</title>
        <meta name="description" content="Learn about Vyrran Technologies, our mission to pioneer the future of web development, and meet our founder Kirubel Addis." />
        <meta name="keywords" content="about vyrran, company story, web development team, technology innovation, kirubel addis" />
        <meta property="og:title" content="About Vyrran Technologies - Our Story & Vision" />
        <meta property="og:description" content="Learn about our mission to pioneer the future of web development" />
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
                About <span className="text-primary">Vyrran</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground font-futura max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                We are a forward-thinking technology company dedicated to crafting the digital experiences 
                of tomorrow. Our passion lies in transforming innovative ideas into powerful, scalable solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-cyber font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground font-futura text-lg leading-relaxed">
                    To revolutionize the digital landscape by creating cutting-edge web solutions that 
                    empower businesses to thrive in the digital age. We combine innovative technology 
                    with exceptional design to deliver experiences that captivate and convert.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-cyber font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground font-futura text-lg leading-relaxed">
                    To be the leading force in shaping the future of web development, where technology 
                    seamlessly integrates with human creativity to build digital experiences that 
                    inspire, engage, and transform the way we interact with the digital world.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-20 bg-gradient-cyber">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <motion.img
                    src={ceoImage}
                    alt="Kirubel Addis - CEO & Founder"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-neon opacity-10 rounded-2xl" />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-foreground">
                  CEO & <span className="text-primary">Founder</span>
                </h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-cyber font-semibold text-primary mb-2">
                    Kirubel Addis
                  </h3>
                  <p className="text-lg text-muted-foreground font-futura">
                    CEO & Founder
                  </p>
                </div>
              
                <p className="text-muted-foreground font-futura text-lg leading-relaxed">
                  My expertise spans across full-stack development, cloud architecture, and emerging 
                  technologies like AI and SaaS. Under My leadership, Vyrran has become synonymous 
                  with technical excellence and innovative digital solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
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
                Our <span className="text-primary">Values</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground font-futura max-w-3xl mx-auto"
                variants={itemVariants}
              >
                The principles that guide everything we do
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div key={value.title} variants={itemVariants}>
                  <Card className="p-6 h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-cyber font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-futura leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-cyber">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  variants={itemVariants}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-muted-foreground font-futura">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
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
                className="text-4xl md:text-5xl font-cyber font-bold mb-8 text-foreground"
                variants={itemVariants}
              >
                Our <span className="text-primary">Story</span>
              </motion.h2>
              <motion.div className="space-y-6" variants={itemVariants}>
                <p className="text-lg text-muted-foreground font-futura leading-relaxed">
                  Founded in 2021, Vyrran Technologies emerged from a simple yet powerful belief: 
                  that technology should serve humanity, not the other way around. What started as 
                  a small team of passionate developers has grown into a dynamic company that pushes 
                  the boundaries of what's possible in web development.
                </p>
                <p className="text-lg text-muted-foreground font-futura leading-relaxed">
                  Our journey began with a mission to democratize access to cutting-edge technology. 
                  We've helped startups scale to millions of users, assisted enterprises in digital 
                  transformation, and created platforms that connect communities across the globe.
                </p>
                <p className="text-lg text-muted-foreground font-futura leading-relaxed">
                  Today, we continue to evolve, embracing new technologies and methodologies while 
                  staying true to our core values of innovation, quality, and client success. 
                  The future is bright, and we're excited to shape it together with our clients and partners.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;