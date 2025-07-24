import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import vyrranLogo from '@/assets/vyrran-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', path: '/services' },
        { name: 'UI/UX Design', path: '/services' },
        { name: 'Frontend Development', path: '/services' },
        { name: 'Consulting', path: '/services' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'vyrrantech@gmail.com', icon: Mail },
        { name: '+251997424291', icon: Phone },
        { name: 'Addis Ababa, Ethiopia', icon: MapPin }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'Github' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <motion.img
                src={vyrranLogo}
                alt="Vyrran"
                className="w-8 h-8"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(184 100% 50% / 0.5)" }}
              />
              <span className="text-xl font-cyber font-bold text-primary tracking-wider">
                VYRRAN
              </span>
            </Link>
            <p className="text-muted-foreground font-futura mb-6 leading-relaxed">
             Building next level websites with cutting-edge technology,
            User Friendly design, and excellent performance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px hsl(184 100% 50% / 0.3)" }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-cyber font-semibold text-foreground mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-futura flex items-center"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div className="text-muted-foreground font-futura flex items-center">
                        {link.icon && <link.icon className="w-4 h-4 mr-2 text-primary" />}
                        {link.name}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground font-futura text-sm">
              © {currentYear} Vyrran Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-futura"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-futura"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;