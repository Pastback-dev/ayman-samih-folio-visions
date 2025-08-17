import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="fade-in-up animate">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">Ayman</span>{' '}
              <span className="text-accent">Samih</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-secondary-foreground mb-4">
              Future Computer Engineer & Software Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about technology, intelligent systems, and building innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn-primary">
                View My Work
              </button>
              <button className="btn-accent">
                Download CV
              </button>
            </div>
            
            <div className="flex gap-6 justify-center">
              <a href="mailto:aymansamih2003@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Mail size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="text-accent" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;