import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C/C++", level: 75 },
      ]
    },
    {
      title: "Web & Mobile Development",
      skills: [
        { name: "PHP", level: 78 },
        { name: "MySQL", level: 82 },
        { name: "Firebase", level: 75 },
      ]
    },
    {
      title: "Systems & Technologies",
      skills: [
        { name: "Linux", level: 70 },
        { name: "Windows Server", level: 65 },
        { name: "Unreal Engine", level: 72 },
      ]
    },
    {
      title: "Emerging Technologies",
      skills: [
        { name: "Machine Learning", level: 68 },
        { name: "Pig Latin", level: 60 },
        { name: "AI Systems", level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="tech-card">
                <h3 className="text-lg font-semibold text-primary mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-accent font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: `width 1.5s ease-out ${skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;