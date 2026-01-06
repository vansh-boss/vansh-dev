import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_56%_/_0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      {/* MAIN CONTENT */}
      <div className="container-custom relative z-10 flex flex-col lg:flex-row-reverse items-center gap-12">
        
        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-float bg-secondary">
            <img
              src="/pro1.png"
              alt="Vansh Panchal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up">
            Vansh <span className="text-gradient">Panchal</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 animate-fade-up">
            Full-Stack Developer
          </h2>

          <p className="text-muted-foreground text-base md:text-lg mb-6 animate-fade-up">
            BCA Student | Passionate Full-Stack Developer focused on building
            modern, scalable and user-friendly web applications.
            <br />
            Skilled in <b>React, Node.js, Express, MongoDB, Tailwind CSS</b>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-xl hover:scale-105 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-border hover:bg-secondary transition"
            >
              Get in Touch
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 animate-fade-in">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <ArrowDown size={20} className="animate-bounce text-primary" />
      </div>
    </section>
  );
};

export default Hero;
