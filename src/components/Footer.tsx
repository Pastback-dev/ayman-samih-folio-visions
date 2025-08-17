import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ayman Samih</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Future Computer Engineer passionate about building innovative solutions 
                with cutting-edge technologies.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-medium">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                  About Me
                </a>
                <a href="#skills" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                  Skills
                </a>
                <a href="#projects" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-medium">Get In Touch</h4>
              <div className="space-y-2 text-sm">
                <a 
                  href="mailto:aymansamih2003@gmail.com"
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  aymansamih2003@gmail.com
                </a>
                <a 
                  href="tel:+212617019200"
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  06 17 01 92 00
                </a>
                <span className="block text-primary-foreground/80">
                  Casablanca, Morocco
                </span>
              </div>
            </div>
          </div>
          
          {/* Social Links & Copyright */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <span>© {currentYear} Ayman Samih. Made with</span>
                <Heart size={16} className="text-accent" />
                <span>in Morocco</span>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="mailto:aymansamih2003@gmail.com"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;