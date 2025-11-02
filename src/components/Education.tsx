import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const educationData = [
  {
    institution: "Jain University",
    location: "Bengaluru",
    degree: "B.Tech - Computer Science Engineering",
    period: "Sept 2022 – May 2026",
    score: { value: 8.1, max: 10, label: "CGPA" },
    courses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
    ],
  },
  {
    institution: "Noble Sr. Sec. School",
    location: "Rajasthan",
    degree: "Class XII - PCM",
    period: "2021",
    score: { value: 91, max: 100, label: "Percentage" },
    courses: ["Mathematics", "Physics", "Chemistry"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Fundamental Analysis</h2>
          <p className="text-muted-foreground font-mono text-sm">
            Academic background and coursework
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-border bg-card p-6 hover:border-accent transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="text-accent mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </div>

              <div className="mb-4 pb-4 border-b border-border">
                <p className="text-sm font-semibold mb-1">{edu.degree}</p>
                <p className="text-xs font-mono text-muted-foreground">{edu.period}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm font-mono text-muted-foreground">
                    {edu.score.label}
                  </span>
                  <span className="text-2xl font-bold font-mono">
                    {edu.score.value}
                    <span className="text-lg text-muted-foreground">/{edu.score.max}</span>
                  </span>
                </div>
                <Progress
                  value={(edu.score.value / edu.score.max) * 100}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={16} className="text-accent" />
                  <span className="text-xs font-mono text-muted-foreground">
                    {index === 0 ? "RELEVANT COURSEWORK" : "FOUNDATION"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-xs border border-border"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
