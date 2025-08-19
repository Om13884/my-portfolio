import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React, Tailwind CSS, and JavaScript, showcasing my front-end skills and academic projects as a recent graduate.",
    image: "/projects/Portfolio website.jpg",
    tags: ["React", "Next.js", "vite","TailwindCSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "File Vault: Secure and Decentralized File Storage",
    description:
      "File Vault is a capstone project that provides a secure and decentralized file storage solution, designed to ensure data privacy, integrity, and accessibility.",
    image: "/projects/file-vault.jpg",
    tags: ["Access control", "AES", "Blockchain","Solidity","Ethereum"],
    githubUrl: "https://github.com/Om13884/file-vault",
    demoUrl : "https://eth-trade-vault.lovable.app/",
  },
  {
    id: 3,
    title: "Nft-getting website for a client",
    description:
    "A modern NFT marketplace website built for a client, featuring a sleek user interface for browsing, buying, and selling NFTs. The platform includes user authentication, wallet integration, and real-time price updates.",
    image: "/projects/nft-getting.jpg",
    tags: ["React", "Next.js", "vite","TailwindCSS", "JavaScript"],
    githubUrl: "https://github.com/Om13884/nft-token-demo",
  },
  {
  id: 4,
  title: "ETH Trade Vault - Web3 Trading Dashboard",
  description:
    "A minimalistic Web3 trading dashboard that allows users to connect their wallet, view real-time ETH/USD prices, check their wallet balance, and simulate ETH investments based on USD input. Built to explore DeFi UX and Web3 integrations with future scalability in mind.",
  image: "/projects/trading_deshboard.png", 
  tags: ["React", "Vite", "Web3.js", "TailwindCSS", "Solidity", "Hardhat"],
  githubUrl: "https://github.com/Om13884/eth-trade-vault", 
},
{
  id: 5,
  title: "Text-to-Speech Converter",
  description:
    "A simple text-to-speech web app that converts user-inputted text into natural speech. Users can input text, select a voice, and listen to the generated audio output instantly. Designed to make text more accessible with an easy-to-use UI.",
  image: "/projects/text_to_speech.png",
  tags: ["React", "JavaScript", "HTML", "CSS"],
  githubUrl: "https://github.com/Om13884/text_to_speech-",
},

 {
  id: 6,
  title: "Dynamic Sports NFT (Weather-driven Dynamic NFTs)",
  description:
    "A decentralized application (dApp) for creating dynamic ERC-1155 NFTs whose metadata—especially images—can be updated by authorized accounts to reflect changing conditions (e.g., emotions, weather). Built with a React frontend and Hardhat smart contracts to explore interactive Web3 NFT experiences.",
  image: "/projects/weather_nft.png",
  tags: [
    "React", "Vite", "TailwindCSS", "Solidity", "Hardhat", 
    "Ethers.js", "Pinata", "Framer Motion"
  ],
  githubUrl: "https://github.com/Om13884/Dyanamic_nft_for_weather",
},

];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of the academic projects I worked on, showcasing my skills in full-stack development, machine learning, and embedded systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <a
              key={key}
              href={project.githubUrl || project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                        <Github size={24} className="text-white" />
                      </div>
                    )}
                    {project.demoUrl && (
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                        <ExternalLink size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-primary">
                  View Project
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Om13884"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
