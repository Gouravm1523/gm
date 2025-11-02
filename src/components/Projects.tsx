import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, X } from "lucide-react";
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
    description:
      "Developed AI-powered system that provides stock recommendations using machine learning models. Implemented portfolio optimization algorithms to maximize returns and minimize risks.",
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
    description:
      "Built web portal enabling residents to submit complaints, track responses, and view town updates. Implemented role-based access for different user types.",
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
    description:
      "Designed application to log, categorize, and visualize daily expenses with interactive charts. Implemented budget monitoring and summary reports.",
    tech: ["React.js", "Node.js", "Chart.js", "SQLite"],
    status: "Active",
    features: [
      "Expense categorization & logging",
      "Budget monitoring system",
      "Interactive data visualizations",
    ],
  },
];

const CreativeModal = ({ project, onClose }) => {
  if (!project) return null;

  // a few polished message lines to choose from
  const lines = [
    "We're sculpting something exceptional — hang tight!",
    "This feature is being handcrafted with love and precision.",
    "In the workshop: refining UX, tuning performance, and adding magic ✨",
  ];

  // pick deterministic line for consistency
  const line = lines[project.title.length % lines.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ y: 20, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 max-w-2xl w-full rounded-2xl bg-card border border-border p-8 shadow-2xl"
        role="document"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-prose leading-relaxed">
              {line}
            </p>
          </div>

          <button
            aria-label="Close modal"
            onClick={onClose}
            className="rounded-md p-2 hover:bg-muted/40"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          {/* Left: Details */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

            <div className="mb-4">
              <p className="text-xs font-mono text-muted-foreground mb-2">KEY FEATURES</p>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono text-muted-foreground mb-2">TECH STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-secondary text-xs font-mono border border-border rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Big creative visual and progress */}
          <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-muted/10">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mb-4">
              <Activity size={40} className="animate-pulse text-accent" />
            </div>

            <div className="w-full">
              {/* Animated progress bar using framer-motion */}
              <div className="mb-2 text-xs font-mono text-muted-foreground flex justify-between">
                <span>Progress</span>
                <span>~{(project.title.length * 7) % 100}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-border/40 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(project.title.length * 7) % 100}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-accent/80"
                />
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground text-center max-w-[18rem]">
              {`We're polishing UI, strengthening reliability, and adding delightful details. If you'd like, click "Notify me" and I'll keep this on the radar.`}
            </p>

            <div className="mt-6 flex gap-3">
              <Button
                onClick={onClose}
                variant="ghost"
                className="px-4"
              >
                Close
              </Button>

              <Button
                onClick={() => {
                  // simple acknowledge action — keeps flow same; closes modal
                  onClose();
                }}
                variant="default"
                className="px-4"
              >
                Notify me
              </Button>
            </div>
          </div>
        </div>

        {/* subtle footer */}
        <div className="mt-6 text-xs text-muted-foreground text-right">
          <span>Last update: </span>
          <span className="font-mono">{new Date().toLocaleDateString()}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleView = (project) => {
    if (project.title === "Personal Expense Tracker") {
      window.open("https://tracexpense.vercel.app/", "_blank", "noopener,noreferrer");
      return;
    }
    // open creative modal for other projects
    setActiveProject(project);
  };

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
              className="border border-border bg-card p-6 hover:border-accent transition-all hover:shadow-lg group relative"
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
                onClick={() => handleView(project)}
              >
                View Details
                <ArrowUpRight size={14} className="ml-2" />
              </Button>

              {/* If you prefer on-card inline modal later, we could attach the modal to this card instead */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal — rendered when activeProject is set */}
      {activeProject && (
        <CreativeModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
