import { motion } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const generateChartData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    value: Math.random() * 40 + 30 + i * 2,
  }));
};

const projectsData = [
  {
    title: "AI Investment Advisor System",
    description: "Developed AI-powered system that provides stock recommendations using machine learning models. Implemented portfolio optimization algorithms to maximize returns and minimize risks.",
    tech: ["Python", "ML", "React.js", "Portfolio Optimization"],
    status: "Active",
    features: [
      "Stock recommendations using ML models",
      "Risk minimization algorithms",
      "Interactive performance dashboard",
    ],
  },
  {
    title: "Smart Municipality Portal",
    description: "Built web portal enabling residents to submit complaints, track responses, and view town updates. Implemented role-based access for different user types.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    status: "Active",
    features: [
      "Real-time complaint tracking",
      "Role-based access control",
      "Data-driven analytics dashboard",
    ],
  },
  {
    title: "Personal Expense Tracker",
    description: "Designed application to log, categorize, and visualize daily expenses with interactive charts. Implemented budget monitoring and summary reports.",
    tech: ["React.js", "Node.js", "Chart.js", "SQLite"],
    status: "Active",
    features: [
      "Expense categorization & logging",
      "Budget monitoring system",
      "Interactive data visualizations",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Portfolio Holdings</h2>
          <p className="text-muted-foreground font-mono text-sm">
            Active positions and performance metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border bg-card p-6 hover:border-accent transition-all hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold pr-4">{project.title}</h3>
                <div className="flex items-center gap-1 text-xs font-mono text-success">
                  <Activity size={12} className="animate-pulse" />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-20 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={generateChartData()}>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--accent))"
                      fill="hsl(var(--accent) / 0.1)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-mono text-muted-foreground mb-2">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-xs font-mono border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono text-muted-foreground mb-2">KEY FEATURES</p>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-accent mt-1 block w-1 h-1 rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
              >
                View Details
                <ArrowUpRight size={14} className="ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
