import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experienceData = [
  {
    title: "Frontend Developer Intern",
    company: "CodeAlpha",
    location: "Remote, India",
    period: "June 2024 – July 2024",
    description: [
      "Collaborated with a team to design and implement reusable UI components, improving development efficiency and consistency across the project",
      "Optimized website performance by reducing load times and ensuring cross-browser compatibility, resulting in a smoother user experience",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Trading History</h2>
          <p className="text-muted-foreground font-mono text-sm">
            Professional experience and executed positions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Marker */}
              <div className="absolute left-[-8px] md:left-[24px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

              <div className="border border-border bg-card p-6 hover:border-accent transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase size={16} />
                      <span className="text-sm">{exp.company}</span>
                      <span className="text-xs">•</span>
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 w-fit">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
