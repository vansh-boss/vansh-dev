import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl" />
              
              <div className="relative h-full card-glass rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-5xl">🎓</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      BCA Student & MERN Stack Learner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Building skills for{" "}
              <span className="text-gradient">real-world development</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a <strong>BCA final-year student (2026)</strong> currently
                learning and working with the <strong>MERN stack</strong>.
                I focus on building practical, real-world projects to strengthen
                my development skills.
              </p>

              <p>
                I have completed a <strong>MERN Stack development course</strong>
                where I worked with technologies like React, Node.js, Express,
                MongoDB, and Tailwind CSS. I enjoy creating clean UI and
                structured backend logic.
              </p>

              <p>
                Along with technical skills, I am actively improving my
                <strong> English communication</strong> and professional
                interaction skills to perform confidently in interviews and
                team environments.
              </p>

              <p>
                I have built a <strong>full-stack eCommerce project</strong>
                focused on selling bags, including product listing, cart
                functionality, user authentication, and a responsive UI.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-border">
              {[
                "MERN Stack Fundamentals",
                "React & Tailwind UI",
                "Node & Express APIs",
                "MongoDB Database",
                "English Communication",
                "Real-world Projects",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="text-sm font-medium text-foreground">
                    ✔ {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
