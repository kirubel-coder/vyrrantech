import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Vyrran Technologies - Get In Touch</title>
        <meta name="description" content="Contact Vyrran Technologies for your web development needs. Get a free consultation today." />
      </Helmet>

      <div className="pt-16">
        <section className="py-20 bg-gradient-cyber">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-5xl md:text-6xl font-cyber font-bold mb-6 text-foreground">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground font-futura max-w-4xl mx-auto">
                Ready to start your next project? Let's discuss how we can help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="p-8 bg-card border-border">
                  <h2 className="text-2xl font-cyber font-bold mb-6 text-foreground">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-glow-intense transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-cyber font-bold mb-6 text-foreground">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="w-6 h-6 text-primary mr-4" />
                        <span className="text-foreground font-futura">vyrrantech@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-6 h-6 text-primary mr-4" />
                        <span className="text-foreground font-futura">+251997424291</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-primary mr-4" />
                        <span className="text-foreground font-futura">Addis Ababa, Ethiopia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;