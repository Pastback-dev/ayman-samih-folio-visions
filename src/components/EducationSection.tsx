import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      title: "Cycle Ingénieur - Computer Engineering",
      institution: "EMSI (École Marocaine des Sciences de l'Ingénieur)",
      period: "2021 – 2026",
      location: "Casablanca, Morocco",
      description: "Specialized in software development, intelligent systems, and IT technologies. Strong foundation in object-oriented programming, databases, computer networks, and software engineering.",
      highlights: [
        "Software Engineering & Development",
        "Intelligent Systems & AI",
        "Database Management Systems",
        "Computer Networks & Security",
        "Object-Oriented Programming"
      ],
      status: "Final Year"
    },
    {
      title: "Baccalauréat Sciences Physiques",
      institution: "Lycée Mohammed",
      period: "2020 – 2021",
      location: "Morocco",
      description: "Scientific baccalaureate with focus on physics and mathematics, providing strong analytical and problem-solving foundations for engineering studies.",
      highlights: [
        "Physics & Mathematics",
        "Scientific Research Methods",
        "Problem Solving",
        "Analytical Thinking"
      ],
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Education</span> <span className="text-accent">&</span> <span className="text-primary">Learning</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/20 rounded-xl border border-accent/30">
                    <GraduationCap className="text-accent" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {edu.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit ${
                        edu.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-accent mb-3">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-primary">Key Subjects & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <span 
                            key={highlightIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;