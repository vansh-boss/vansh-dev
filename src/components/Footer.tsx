import { useRef, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_yn1kmmg",   // Replace with your EmailJS Service ID
        "template_og94fxj",                // Replace with your EmailJS Template ID
        formRef.current,
        "XtOaqWy0Qi_Zcf7Fu"    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          alert("Message failed ❌");
          setSending(false);
        }
      );
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container-custom max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* ===== LEFT: Name + Social Links ===== */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <a href="#" className="font-display text-2xl font-bold">
            Vansh<span className="text-primary">.Dev</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vansh Pro. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4">
            {[{ icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Twitter, href: "https://twitter.com" }].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* ===== RIGHT: Contact Form ===== */}
        <div>
          <h2 className="text-2xl font-bold text-gradient mb-4 text-center md:text-left">
            Contact Me
          </h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

            {/* Hidden field for template subject */}
            <input type="hidden" name="title" value="Portfolio Contact" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-[1.02] transition ${
                sending ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
