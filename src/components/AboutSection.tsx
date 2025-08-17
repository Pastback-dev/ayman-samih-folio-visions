import { MapPin, Phone, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Étudiant en dernière année à l'EMSI, passionné par les technologies de l'information, 
                le développement logiciel et les systèmes intelligents. Solide formation en programmation 
                orientée objet, bases de données, réseaux informatiques et génie logiciel.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Curieux, autonome et motivé, je cherche constamment à approfondir mes connaissances 
                et à relever de nouveaux défis technologiques. Mon objectif est de contribuer à 
                l'innovation dans le domaine du développement logiciel et des systèmes intelligents.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Innovation Focused
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="tech-card">
                <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <span className="text-muted-foreground">Casablanca, Morocco</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <span className="text-muted-foreground">06 17 01 92 00</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <span className="text-muted-foreground">aymansamih2003@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div className="tech-card">
                <h3 className="text-xl font-semibold text-primary mb-4">Languages</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Arabic</span>
                    <span className="text-accent font-medium">90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">French</span>
                    <span className="text-accent font-medium">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">English</span>
                    <span className="text-accent font-medium">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;