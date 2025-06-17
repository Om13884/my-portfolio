import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Type,
  Palette,
  Database,
  FileCode2,
  Server,
  GitBranch,
  BookOpen,
  Laptop,
  Shield,
  FileText,
  BarChart2,
  Image,
  FileType,
  Terminal,
  Globe,
  Layers,
  Network,
  MessageSquare,
  Monitor,
  Presentation,
  TerminalSquare,
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: FileType, category: "frontend" },
  { name: "JavaScript", icon: FileType, category: "frontend" },
  { name: "React", icon: Code2, category: "frontend" },
  // { name: "TypeScript", icon: Type, category: "frontend" },
  { name: "Tailwind CSS", icon: Palette, category: "frontend" },
  { name: "Bootstrap", icon: Palette, category: "frontend" },
  

  // Backend
  { name: "Python", icon: Terminal, category: "backend" },
  { name: "SQL", icon: Database, category: "backend" },
  { name: "Solidity", icon: FileCode2, category: "backend" },
  { name: "Ethereum", icon: FileCode2, category: "backend" },
  { name: "Blockchain", icon: FileCode2, category: "backend " },
  { name: "Smart Contracts", icon: FileCode2, category: "backend" },
  { name: "Web3", icon: FileCode2, category: "backend" },
  { name: "Blockchain", icon: FileCode2, category: "backend" },
  { name: "Smart Contracts", icon: FileCode2, category: "backend" },
  { name: "Web3", icon: FileCode2, category: "backend" },
  { name: "Rest API", icon: Globe, category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: GitBranch, category: "tools" },
  { name: "jupyter", icon: BookOpen, category: "tools" },
  { name: "Google Colab", icon: Laptop, category: "tools" },
  { name: "VS Code", icon: Code2, category: "tools" },
  { name: "Nmap", icon: Shield, category: "tools" },
  { name: "Ms O365", icon: FileText, category: "tools" },
  { name: "Adobe Analytics", icon: BarChart2, category: "tools" },
  { name: "Canva", icon: Image, category: "tools" },
  { name: "Wireshark", icon: Network, category: "tools" },
  { name: "Remix IDE", icon: FileCode2, category: "tools" },
  { name: "Microsoft PowerPoint", icon: Presentation, category: "tools" },
  { name: "Networking Concepts", icon: Network, category: "tools" },
  { name: "Prompt Engineering", icon: MessageSquare, category: "tools" },
  { name: "Kali Linux", icon: TerminalSquare, category: "tools" },
  { name: "OpenAI", icon: MessageSquare, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs transition-all duration-150 hover:shadow-lg hover:shadow-primary/50 hover:scale-110 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
