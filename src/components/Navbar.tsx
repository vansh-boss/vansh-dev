import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[100] transition-all
        ${scrolled ? "bg-background/90 backdrop-blur border-b border-border" : "bg-transparent"}`}
      >
        <div className="container-custom flex items-center justify-between h-16">
          <a href="#" className="text-lg font-bold">
            Vansh<span className="text-primary">.Dev</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="nav-link text-sm">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg border border-border"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[200] bg-background">
          <div className="flex items-center justify-between h-16 px-6 border-b border-border">
            <span className="font-bold text-lg">
              Vansh<span className="text-primary">.Dev</span>
            </span>
            <button onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 px-6 pt-10">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
