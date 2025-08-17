import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities, collaborations, or just have a friendly conversation about technology!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <a 
                      href="mailto:aymansamih2003@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      aymansamih2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Phone</h4>
                    <a 
                      href="tel:+212617019200"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      06 17 01 92 00
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Location</h4>
                    <span className="text-muted-foreground">Casablanca, Morocco</span>
                  </div>
                </div>
              </div>
              
              <div className="tech-card">
                <h4 className="font-semibold text-primary mb-4">Let's Build Something Amazing</h4>
                <p className="text-muted-foreground mb-4">
                  Whether you have a project idea, need technical consultation, or want to collaborate 
                  on innovative solutions, I'm always excited to connect with fellow tech enthusiasts 
                  and professionals.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    Software Development
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    AI Solutions
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    Collaboration
                  </span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="tech-card">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-vertical"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="btn-accent w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;