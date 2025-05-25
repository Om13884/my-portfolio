import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Graduate Full-Stack & Cloud Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science graduate who loves building full-stack apps with React, Tailwindcss, and Python. With a knack for cloud tech and machine learning, I enjoy turning ideas into smooth, scalable solutions that make a real impact.
            </p>

            <p className="text-muted-foreground">
               As a recent Computer Science graduate with a passion for building full-stack web apps and cloud-powered solutions. I've worked with tools like React, Python, JavaScript, Html, Java, and Azure to turn ideas into real, polished projects. Curious and hands-on by nature, I love creating tech that's smart, seamless, and built for users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Let’s connect
              </a>

              <a
                href="/Rishav_Resume.pdf"
"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development & Data Science</h4>
                  <p className="text-muted-foreground">
                     Skilled in building responsive web apps and analyzing data using Python and Pandas for informed solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User Interface Development</h4>
                  <p className="text-muted-foreground">
                    Created responsive user interfaces with React.js, Tailwind CSS, and JavaScript, ensuring smooth experience across devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Developed a personal portfolio website using React.js, TypeScript, and Tailwind CSS with smooth transitions and responsive design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
