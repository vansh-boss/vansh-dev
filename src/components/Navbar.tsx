import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#Education" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <a
          href="#"
          className="font-display text-xl font-semibold text-foreground hover:scale-105 transition-transform"
        >
          Vansh<span className="text-primary">.Dev</span>
        </a>


        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <a href={link.href} className="nav-link text-sm font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
