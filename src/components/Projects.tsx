import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";

/* ================= TYPES ================= */
type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  isVisible: boolean;
};

/* ================= PROJECT DATA (FIXED IMAGE PATHS) ================= */
const projects: Project[] = [
  {
    title: "Bag E-Commerce Web App (LuxCarry)",
    description:
      "A full-stack MERN eCommerce application for bags with JWT authentication, cookies, admin panel structure, email messaging, and fully responsive UI.",
    tags: [
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    image: "/img1.png", // ✅ FIXED
    liveUrl: "#",
    githubUrl: "https://github.com/vansh-boss/LuxCarry",
    featured: true,
  },
  {
    title: "Professional Portfolio Website",
    description:
      "A modern, responsive portfolio built using React with About, Skills, Projects, and Contact sections.",
    tags: [
      "HTML5",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive UI",
    ],
    image: "/img2.png", // ✅ FIXED
    liveUrl: "#",
    githubUrl: "https://github.com/vansh-boss/professional-portfolio-design",
    featured: true,
  },
];

/* ================= PROJECT CARD ================= */
const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-xl border border-border
      transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
      ${project.featured ? "lg:col-span-2" : ""}
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* IMAGE */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="flex items-center gap-2 text-white font-medium">
            View on GitHub <Github size={18} />
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

/* ================= MAIN SECTION ================= */
const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm uppercase tracking-widest">
            My Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Real <span className="text-gradient">Work</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            These projects showcase my MERN stack skills, real-world features,
            and responsive UI development.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
