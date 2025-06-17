import { motion } from "framer-motion";

const internships = [
  {
    id: 1,
    title: "Cybersecurity Analyst",
    company: "Tata (Job Simulation)",
    year: "Jan 2024 – Feb 2024",
    description: [
      "Worked on real-world security scenarios involving identity and access management (IAM).",
      "Handled and resolved user queries related to access control, permissions, and potential breaches.",
      "Generated detailed security reports based on investigation findings and IAM audits.",
      "Gained hands-on experience with access workflows and policy-based control system .",
    ],
    tags: ["IAM", "Security Analysis", "Incident Response", "Access Control", "Reporting"]
  },
  {
    id: 2,
    title: "Cybersecurity & Ethical Hacking Intern",
    company: "1Stop.ai",
    year: "July 2023 – Aug 2023",
    description: [
    "Used Kali Linux for penetration testing and vulnerability assessment.",
    "Built custom tools including a Python-based port scanner and IP finder.",
    "Gained deep understanding of ethical hacking, network security, and system exploitation.",
    "Worked with Nmap and other reconnaissance tools to simulate attack-defense strategies."
    ],
    tags: ["Kali Linux", "Python", "Nmap", "Penetration Testing", "Cybersecurity"]
  }
];

export const InternshipsSection = () => {
  return (
    <section id="internships" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Internships</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          During my academic journey, I had the opportunity to intern at companies where I applied my technical skills in real-world projects and gained valuable industry experience.
        </p>

        {/* Vertical timeline line */}
        <div className="absolute left-4 top-32 bottom-0 w-px bg-gradient-to-b from-purple-600/50 to-transparent"></div>

        <div className="flex flex-col gap-12 pl-10 relative">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-card rounded-lg p-6 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-purple-500 shadow-md"></div>

              <h3 className="text-xl font-semibold mb-1">{internship.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                <strong>{internship.company}</strong> &nbsp;|&nbsp; {internship.year}
              </p>

              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                {internship.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-3">
                {internship.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 backdrop-blur-sm text-white relative group"
                  >
                    <span className="absolute inset-0 bg-primary/20 blur-md rounded-full animate-pulse"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full opacity-50"></span>
                    <span className="relative z-10">{tag}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};