import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skillsData = [
  { name: "React.js", ticker: "REACT", proficiency: 85, growth: "+15%" },
  { name: "Python", ticker: "PY", proficiency: 82, growth: "+18%" },
  { name: "JavaScript", ticker: "JS", proficiency: 88, growth: "+12%" },
  { name: "Node.js", ticker: "NODE", proficiency: 78, growth: "+20%" },
  { name: "Java", ticker: "JAVA", proficiency: 80, growth: "+10%" },
  { name: "AWS", ticker: "AWS", proficiency: 75, growth: "+25%" },
  { name: "MySQL", ticker: "SQL", proficiency: 82, growth: "+14%" },
  { name: "MongoDB", ticker: "MONGO", proficiency: 76, growth: "+16%" },
  { name: "Machine Learning", ticker: "ML", proficiency: 80, growth: "+22%" },
  { name: "Docker", ticker: "DOCK", proficiency: 70, growth: "+30%" },
  { name: "Git", ticker: "GIT", proficiency: 90, growth: "+8%" },
  { name: "RESTful APIs", ticker: "API", proficiency: 85, growth: "+13%" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Watchlist</h2>
          <p className="text-muted-foreground font-mono text-sm">
            Current proficiency levels and growth metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.ticker}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-border bg-card p-6 hover:border-accent transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {skill.ticker}
                </span>
                <div className="flex items-center gap-1 text-success text-xs font-mono">
                  <TrendingUp size={12} />
                  <span>{skill.growth}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-mono">Proficiency</span>
                  <span className="font-semibold font-mono">{skill.proficiency}%</span>
                </div>
                <Progress value={skill.proficiency} className="h-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
