import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Next.js", "Tailwind CSS", "GSAP","HTML",],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express","MongoDB", "GraphQL", "REST APIs" , "Mongoose"],
  },
  {
    title: "Tools & More",
    skills: ["Git", "Figma", "Postman", "Vercel","Github", "Visual code"],
  },
];

const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-custom">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans the full stack, with a focus on modern 
            JavaScript frameworks and cloud infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card-glass p-8 transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-display text-lg font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`flex items-center gap-3 group transition-all duration-400 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50 + 300}ms` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Technologies */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {["JavaScript", "HTML5", "CSS3", "Git", "REST", "Express","Node.js","APi","MongoDB","Testing","Postman" ].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
