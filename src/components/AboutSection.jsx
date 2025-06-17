import { Briefcase, Code, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web3, Full-Stack & Cybersecurity Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science student deeply passionate about Web3, full-stack development, and cybersecurity. From building decentralized apps and smart contracts to developing secure systems and polished UIs, I enjoy crafting meaningful tech solutions.
            </p>

            <p className="text-muted-foreground">
              I’ve worked with tools like React, Python, Solidity, Tailwind CSS, and Ethereum. My projects span blockchain-based file sharing, NFT utilities, port scanners, and cloud-based web apps. I love learning by building and solving real-world problems through technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Let’s connect
              </a>

              <a
                href="/Omkar_Resume.pdf"
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
                  <h4 className="font-semibold text-lg">Web & Blockchain Development</h4>
                  <p className="text-muted-foreground">
                    Experience building full-stack apps and decentralized platforms using React, Solidity, and web3.js. I focus on usability, security, and scalability.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cybersecurity & Ethical Hacking</h4>
                  <p className="text-muted-foreground">
                    Hands-on work with Kali Linux, Nmap, and Python to develop network tools, perform penetration testing, and explore ethical hacking techniques.
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
                    Built blockchain apps, developer tools, and responsive websites with modern stacks like React, TypeScript, and Tailwind CSS.
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
