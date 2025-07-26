import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import Movierating1 from '@/assets/movierating1.png';
import Closet1 from '@/assets/closet1.png'
import Danat1 from '@/assets/danat1.png'

const Projects = () => {
  const projects = [
    {
      title: "Movie Rating Website for Amharic movies",
      description: "A futuristic movie rating website that allows Ethiopians to rate their movies",
      image: Movierating1,
      tech: ["React", "Node.js", "MongoDB"
      ],
      category: "Web Development",
      year: "2024"
    },
    {
      title: "Shopping Website | WebApp",
      description: "Expert level shopping website /WebApp",
      image: Closet1,
      tech: ["react.js", "TypeScript", "mongoDB"],
      category: "Web Development",
      year: "2024"
    },
    {
      title: "Company Landing page",
      description: "A Landing page for a company called Danat P.L.C",
      image: Danat1,
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      category: "Frontend Development",
      year: "2023"
    }
    ,
        {
          title: 'Healthcare Website Design',
          description: 'Complete UX/UI design for a healthcare application focusing on patient management and telemedicine capabilities.',
          category: 'UI/UX Design',
          tech: ['Figma', 'Codepen', 'Canva', ],
          image: "https://cdn.dribbble.com/userupload/21467436/file/original-e070670b034bb599eeb8fc98085e2b65.jpg?resize=1024x768&vertical=center",
          year: "2023"
        },
        {
          title: 'Real Estate Platform Website Design',
          description: 'Full-featured real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
          category: 'Web Design',
          tech: ['Figma', 'Canva', 'Uivers',  'Codepen'],
          image: "https://cdn.dribbble.com/userupload/16607783/file/original-84341079177105105983fb8b0b3db7e9.png?resize=1024x768&vertical=center",
          year: "2024"
        },
        {
          title: 'Fitness Tracking Website Design',
          description: 'fitness website with workout tracking, nutrition planning, and social features for fitness enthusiasts.',
          category: 'Website Design',
          tech: ['Figma', 'Canva'],
          image: "https://cdn.dribbble.com/userupload/18181117/file/original-6e7cb3ce00e491f05cf8ce3f64d2111d.png?resize=1024x666&vertical=center",
          year: "2025" 
        }
  ];

  return (
    <>
      <Helmet>
        <title>Projects - Vyrran Technologies | Our Portfolio</title>
        <meta name="description" content="Explore our portfolio of cutting-edge web applications, mobile apps, and digital solutions." />
      </Helmet>

      <div className="pt-16">
        <section className="py-20 bg-gradient-cyber">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-5xl md:text-6xl font-cyber font-bold mb-6 text-foreground">
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground font-futura max-w-4xl mx-auto">
                Showcasing our latest innovations and cutting-edge solutions
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-primary text-sm font-futura">{project.category}</span>
                        <span className="text-muted-foreground text-sm font-futura">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-cyber font-semibold mb-3 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-futura mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;