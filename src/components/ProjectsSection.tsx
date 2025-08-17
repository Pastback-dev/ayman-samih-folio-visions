import { ExternalLink, Github, Gamepad2, Smartphone, Leaf, ShoppingCart } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Battle Royale Shooting Game",
      description: "A competitive multiplayer battle royale game developed using Unreal Engine with Blueprints visual scripting system. Features include player combat mechanics, map design, and game optimization.",
      tech: ["Unreal Engine", "Blueprints", "Game Design", "3D Graphics"],
      year: "2023–2024",
      icon: <Gamepad2 className="text-accent" size={32} />,
      status: "Completed"
    },
    {
      title: "Student Absence Tracking App",
      description: "Mobile application with integrated virtual assistant for tracking student attendance. Features smart notifications, voice commands, and automated reporting systems.",
      tech: ["Mobile Development", "AI Assistant", "Firebase", "Voice Recognition"],
      year: "2025",
      icon: <Smartphone className="text-accent" size={32} />,
      status: "In Progress"
    },
    {
      title: "Agricultural Management System",
      description: "Web-based platform for agricultural management with crop monitoring, inventory tracking, and farmer resource management. Built with PHP and MySQL for robust data handling.",
      tech: ["PHP", "MySQL", "Web Development", "Dashboard Design"],
      year: "2023–2024",
      icon: <Leaf className="text-accent" size={32} />,
      status: "Completed"
    },
    {
      title: "E-commerce Platform with AI Chatbot",
      description: "Full-featured e-commerce website integrated with an intelligent chatbot for customer support, product recommendations, and order assistance.",
      tech: ["E-commerce", "AI Chatbot", "Web Development", "Customer Support"],
      year: "2025",
      icon: <ShoppingCart className="text-accent" size={32} />,
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects and development experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="tech-card group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:scale-105 transition-transform">
                    <Github size={16} />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;