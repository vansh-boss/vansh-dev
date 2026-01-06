import { useEffect, useRef, useState } from "react";

const Education = () => {
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
    <section id="education" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Education
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              My <span className="text-gradient">Education Path</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-10">
            {/* BCA */}
            <div
              className={`card-glass p-8 rounded-3xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <h3 className="text-xl font-semibold">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Mewar Institute of Management
              </p>
              <p className="text-sm text-muted-foreground">
                Chaudhary Charan Singh University
              </p>
              <p className="mt-3 text-muted-foreground">
                Currently pursuing BCA (3rd Year, Final Semester). Expected
                completion in <strong>2026</strong>.
              </p>
            </div>

            {/* Ducate */}
            <div
              className={`card-glass p-8 rounded-3xl transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <h3 className="text-xl font-semibold">
                Mern Stack & Development Course
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Ducate – School of AI
              </p>
              <p className="text-sm text-muted-foreground">
                Noida Branch
              </p>
              <p className="mt-3 text-muted-foreground">
                Hands-on training in modern development tools, AI fundamentals,
                and real-world projects.
              </p>
            </div>

            {/* 12th */}
            <div
              className={`card-glass p-8 rounded-3xl transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <h3 className="text-xl font-semibold">
                Senior Secondary (Class 12)
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                CBSE Board
              </p>
              <p className="mt-3 text-muted-foreground">
                Scored <strong>70%</strong> in Class 12.
              </p>
            </div>

            {/* 10th */}
            <div
              className={`card-glass p-8 rounded-3xl transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <h3 className="text-xl font-semibold">
                Secondary (Class 10)
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                CBSE Board
              </p>
              <p className="mt-3 text-muted-foreground">
                Scored <strong>60%</strong> in Class 10.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
