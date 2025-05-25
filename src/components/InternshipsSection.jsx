import { motion } from "framer-motion";

const internships = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "INTERNPE",
    year: "Jan 2024 – Feb 2024",
    description: [
      "Assisted in the design and development of responsive websites using React, CSS, JavaScript, and various frameworks.",
      "Participated in code reviews and debugging sessions to maintain code quality and optimize performance.",
      "Performed testing and verification to identify and resolve issues, improving site reliability.",
      "Executed component-level feature testing and assisted with release testing during deployment cycles."
    ],
    tags: ["React", "JavaScript", "CSS", "Web Development", "HTML"]
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "1Stop.ai",
    year: "Feb 2023 – Mar 2023",
    description: [
      "Analyzed large datasets using Python, Pandas, and NumPy to extract meaningful insights.",
      "Created data visualizations with Matplotlib and Seaborn to communicate findings effectively.",
      "Worked with SQL databases for data extraction, cleaning, and analysis.",
      "Automated data report generation using Python scripts and scheduled visual updates via Jupyter notebooks."
    ],
    tags: ["Python", "Pandas", "NumPy", "Data Visualization", "SQL"]
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
                    className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white shadow-inner"
                  >
                    {tag}
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