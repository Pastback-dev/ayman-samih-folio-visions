import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code, Cpu } from 'lucide-react';
import cyberBackground from '@/assets/cyber-background.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'console.log("Hello World");';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-tech">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${cyberBackground})` }}
      />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Terminal className="absolute top-20 left-10 text-primary/30 animate-float" size={32} />
        <Code className="absolute top-32 right-20 text-accent/30 animate-float" size={28} style={{ animationDelay: '1s' }} />
        <Cpu className="absolute bottom-40 left-20 text-primary/30 animate-float" size={36} style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="fade-in-up animate">
            <div className="mb-8">
              <div className="code-block w-fit mx-auto mb-8 font-mono text-lg">
                <span className="text-accent">&gt;</span> {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span 
                className="glitch-text" 
                data-text="Ayman"
              >
                Ayman
              </span>{' '}
              <span className="text-primary">Samih</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium text-secondary-foreground mb-4">
              Computer Engineer & <span className="text-accent">Software Developer</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building the future with <span className="text-primary">intelligent systems</span>, 
              <span className="text-accent"> innovative solutions</span>, and cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn-cyber">
                <Terminal className="mr-2" size={20} />
                View Projects
              </button>
              <button className="btn-matrix">
                <Code className="mr-2" size={20} />
                Download CV
              </button>
            </div>
            
            <div className="flex gap-6 justify-center">
              <a 
                href="mailto:aymansamih2003@gmail.com" 
                className="p-4 rounded-full cyber-card hover:bg-primary/20 transition-all duration-300"
              >
                <Mail size={24} className="text-primary" />
              </a>
              <a 
                href="#" 
                className="p-4 rounded-full cyber-card hover:bg-accent/20 transition-all duration-300"
              >
                <Github size={24} className="text-accent" />
              </a>
              <a 
                href="#" 
                className="p-4 rounded-full cyber-card hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin size={24} className="text-primary" />
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