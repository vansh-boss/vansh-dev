import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  const textArray = [
    "Building modern web experiences",
    "Crafting scalable MERN applications",
    "Turning ideas into clean code",
    "Full-Stack development in progress"
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = textArray[wordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 60);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % textArray.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative h-[calc(100svh-64px)] pt-20 md:pt-24 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(174_72%_56%_/_0.08)_0%,_transparent_65%)]" />

      <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-1 md-10">

        {/* IMAGE */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="w-48 sm:w-56 md:w-72 lg:w-80 aspect-square rounded-full overflow-hidden border border-primary/30 bg-secondary shadow-xl">
            <img
              src="/pro1.png"
              alt="Vansh Panchal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1 text-center md:text-left">

          {/* ✅ NAME (STATIC – CLEAR IDENTITY) */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Vansh <span className="text-gradient">Panchal</span>
          </h1>

          {/* ✅ TYPING TEXT (ROLE / TAGLINE) */}
          <h2 className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-primary">
            <span>{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto md:mx-0">
            I am Vansh Panchal, BCA Student & Full-Stack Developer focused on building clean,
            scalable and modern web applications using MERN Stack.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/vansh-boss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/panchalvansh59"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://x.com/?lang=en-in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Twitter size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
