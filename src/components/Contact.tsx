import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
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
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      {/* background */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Let’s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-base md:text-lg">
            Have an idea, project, or opportunity in mind?  
            I’m always open to discussing new work, collaborations, or freelance projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <h3 className="font-display text-xl font-semibold mb-3">
                Contact Details
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You can reach me anytime through email or location mentioned below.  
                I usually respond within <span className="text-primary font-medium">24 hours</span>.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:panchalvansh59@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/60 hover:bg-secondary transition group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-base">
                    panchalvansh59@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/60">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-base">
                    Ashok Vatika, Garima Garden, Ghaziabad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`lg:col-span-3 card-glass p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <Send size={18} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vansh Pro. All rights reserved.
          </p>
         
              
            
         <div className="flex gap-4">
  <a
    href="https://github.com/vansh-boss"   // ← GitHub profile link
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Github size={18} />
  </a>

  <a
    href="https://linkedin.com/in/panchalvansh59"  // ← LinkedIn profile link
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Linkedin size={18} />
  </a>

  <a
    href="https://x.com/?lang=en-in"  // ← Twitter link (replace if needed)
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Twitter size={18} />
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
