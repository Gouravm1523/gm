import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
/* --- helper: single-series chart data used in each card (keeps existing feel) --- */
const generateChartData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i],
    value: Math.random() * 40 + 30 + i * 1.5,
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
/* --- GrowthCard: creative evolution visualization showing overall creation journey --- */
const GrowthCard = ({ projects }) => {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState(null);
 
  const phases = [
    {
      label: "Ideate",
      color: "hsl(210, 100%, 56%)",
      description: "Concept formation",
      icon: "circle"
    },
    {
      label: "Prototype",
      color: "hsl(271, 81%, 56%)",
      description: "Initial build",
      icon: "square"
    },
    {
      label: "Refine",
      color: "hsl(var(--accent))",
      description: "Iteration cycle",
      icon: "triangle"
    },
    {
      label: "Ship",
      color: "hsl(142, 76%, 36%)",
      description: "Production ready",
      icon: "hexagon"
    },
  ];
  // Generate smoother, more realistic growth curve
  const generateEvolutionData = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const baseGrowth = 20 + i * 6;
      const variance = Math.sin(i * 0.8) * 5;
      return {
        month: ['J','F','M','A','M','J','J','A','S','O','N','D'][i],
        value: baseGrowth + variance,
        velocity: i > 0 ? (baseGrowth - (20 + (i-1) * 6)) : 0
      };
    });
  };
  const evolutionData = generateEvolutionData();
  const pointsPerPhase = 3;
  const displayedData = evolutionData.slice(0, (activePhase + 1) * pointsPerPhase);
  const metrics = [
    { label: "Projects", value: projects.length, suffix: "", color: phases[0].color },
    { label: "Iterations", value: 47, suffix: "+", color: phases[1].color },
    { label: "Features", value: 156, suffix: "", color: phases[2].color },
    { label: "Velocity", value: 92, suffix: "%", color: phases[3].color },
  ];
  return (
    <div className="border border-border bg-card hover:border-accent transition-all hover:shadow-lg relative overflow-hidden group">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${phases[activePhase].color}, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 17 + 10) % 90}%`,
              top: `${(i * 23 + 15) % 80}%`,
              width: `${12 + (i % 3) * 8}px`,
              height: `${12 + (i % 3) * 8}px`,
              borderRadius: i % 2 === 0 ? '50%' : '2px',
              border: `1px solid ${phases[i % phases.length].color}`,
              rotate: `${i * 45}deg`
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [`${i * 45}deg`, `${i * 45 + 180}deg`, `${i * 45}deg`],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 6 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      <div className="relative p-6 flex flex-col h-full min-h-[400px]">
        {/* Header with live pulse */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold">Creation Engine</h3>
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: phases[activePhase].color }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            {phases[activePhase].description}
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          {/* Phase flow with geometric icons */}
          <div className="relative mb-6">
            {/* Progress line */}
            <div className="absolute top-7 left-6 right-6 h-[2px] bg-border/40" />
            <motion.div
              className="absolute top-7 left-6 h-[2px]"
              style={{ backgroundColor: phases[activePhase].color }}
              initial={{ width: 0 }}
              animate={{
                width: `calc(${(activePhase / (phases.length - 1)) * 100}% - ${24 * (1 - activePhase / (phases.length - 1))}px)`
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Phase nodes */}
            <div className="relative flex justify-between">
              {phases.map((phase, i) => {
                const isActive = i === activePhase;
                const isPast = i < activePhase;
               
                return (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center cursor-pointer group/phase"
                    onHoverStart={() => setActivePhase(i)}
                    whileHover={{ y: -4 }}
                  >
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center mb-2 relative"
                      animate={{
                        scale: isActive ? [1, 1.08, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? Infinity : 0,
                      }}
                    >
                      {/* Outer ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{
                          borderColor: isPast || isActive ? phase.color : "hsl(var(--border))",
                        }}
                        animate={{
                          boxShadow: isActive ? `0 0 24px ${phase.color}40` : "none",
                        }}
                      />
                     
                      {/* Inner geometric shape */}
                      <svg width="24" height="24" viewBox="0 0 24 24" className="relative z-10">
                        {phase.icon === 'circle' && (
                          <motion.circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="none"
                            stroke={isPast || isActive ? phase.color : "hsl(var(--muted-foreground))"}
                            strokeWidth="2"
                            animate={{
                              rotate: isActive ? 360 : 0,
                            }}
                            transition={{
                              duration: 3,
                              repeat: isActive ? Infinity : 0,
                              ease: "linear"
                            }}
                          />
                        )}
                        {phase.icon === 'square' && (
                          <motion.rect
                            x="6"
                            y="6"
                            width="12"
                            height="12"
                            fill="none"
                            stroke={isPast || isActive ? phase.color : "hsl(var(--muted-foreground))"}
                            strokeWidth="2"
                            animate={{
                              rotate: isActive ? [0, 90, 180, 270, 360] : 0,
                            }}
                            transition={{
                              duration: 4,
                              repeat: isActive ? Infinity : 0,
                              ease: "linear"
                            }}
                          />
                        )}
                        {phase.icon === 'triangle' && (
                          <motion.path
                            d="M12 4 L20 18 L4 18 Z"
                            fill="none"
                            stroke={isPast || isActive ? phase.color : "hsl(var(--muted-foreground))"}
                            strokeWidth="2"
                            animate={{
                              scale: isActive ? [1, 1.1, 1] : 1,
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: isActive ? Infinity : 0,
                            }}
                          />
                        )}
                        {phase.icon === 'hexagon' && (
                          <motion.path
                            d="M12 2 L20 7 L20 16 L12 21 L4 16 L4 7 Z"
                            fill="none"
                            stroke={isPast || isActive ? phase.color : "hsl(var(--muted-foreground))"}
                            strokeWidth="2"
                            animate={{
                              rotate: isActive ? 360 : 0,
                            }}
                            transition={{
                              duration: 5,
                              repeat: isActive ? Infinity : 0,
                              ease: "linear"
                            }}
                          />
                        )}
                      </svg>
                    </motion.div>
                   
                    <motion.span
                      className="text-[11px] font-mono tracking-wide"
                      style={{
                        color: isPast || isActive ? phase.color : "hsl(var(--muted-foreground))",
                      }}
                      animate={{
                        opacity: isActive ? [1, 0.7, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? Infinity : 0,
                      }}
                    >
                      {phase.label}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </div>
          {/* Evolution chart with velocity indicators */}
          <div className="mb-4 h-32 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={displayedData}>
                <defs>
                  <linearGradient id="evolutionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={phases[activePhase].color} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={phases[activePhase].color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  opacity={0.2}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))', fontFamily: 'monospace' }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis hide />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card border border-border rounded px-3 py-2 shadow-lg">
                          <p className="text-xs font-mono text-muted-foreground mb-1">
                            {payload[0].payload.month}
                          </p>
                          <p className="text-sm font-semibold" style={{ color: phases[activePhase].color }}>
                            {payload[0].value.toFixed(1)}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={phases[activePhase].color}
                  strokeWidth={2.5}
                  fill="url(#evolutionGradient)"
                  animationDuration={800}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Condensed project overview */}
          <div className="space-y-1.5">
            {projects.map((project, i) => {
              const phaseProgress = ((activePhase + 1) / phases.length) * 100;
              const projectProgress = Math.min(phaseProgress + i * 8, 100);
              const isHighlighted = activePhase === Math.floor((i / projects.length) * phases.length);
             
              return (
                <motion.div
                  key={i}
                  className="p-2 rounded border bg-card/30 backdrop-blur-sm"
                  style={{
                    borderColor: isHighlighted ? phases[activePhase].color : "hsl(var(--border))",
                  }}
                  animate={{
                    opacity: isHighlighted ? 1 : 0.5,
                  }}
                  whileHover={{ opacity: 1, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium tracking-wide">
                      {project.title.substring(0, 20)}...
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {Math.round(projectProgress)}%
                    </span>
                  </div>
                  <div className="h-1 bg-border/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${phases[Math.floor((i / projects.length) * phases.length)].color}, ${phases[Math.min(Math.floor((i / projects.length) * phases.length) + 1, phases.length - 1)].color})`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${projectProgress}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Enhanced metrics grid */}
        <div className="mt-6 pt-4 border-t border-border/50 grid grid-cols-4 gap-3">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="text-center cursor-pointer"
              onHoverStart={() => setHoveredMetric(i)}
              onHoverEnd={() => setHoveredMetric(null)}
              whileHover={{ y: -2 }}
            >
              <motion.div
                className="text-lg font-bold mb-0.5"
                style={{ color: hoveredMetric === i ? metric.color : "hsl(var(--foreground))" }}
                animate={{
                  scale: hoveredMetric === i ? 1.1 : 1,
                }}
              >
                {metric.value}{metric.suffix}
              </motion.div>
              <div className="text-[9px] text-muted-foreground font-mono uppercase tracking-wider">
                {metric.label}
              </div>
              {hoveredMetric === i && (
                <motion.div
                  className="h-0.5 mt-1 rounded-full"
                  style={{ backgroundColor: metric.color }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
/* --- CreativeModal --- */
const CreativeModal = ({ project, onClose }) => {
  if (!project) return null;
  const lines = [
    "We're sculpting something exceptional — hang tight!",
    "This feature is being handcrafted with love and precision.",
    "In the workshop: refining UX, tuning performance, and adding magic ✨",
  ];
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
      <motion.div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />
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
          <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-muted/10">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mb-4">
              <Activity size={40} className="animate-pulse text-accent" />
            </div>
            <div className="w-full">
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
              <Button onClick={onClose} variant="ghost" className="px-4">
                Close
              </Button>
              <Button
                onClick={() => {
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
        <div className="mt-6 text-xs text-muted-foreground text-right">
          <span>Last update: </span>
          <span className="font-mono">{new Date().toLocaleDateString()}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
/* --- main Projects component: renders a 2x2 grid with growth card in bottom-right --- */
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const handleView = (project) => {
    if (project.title === "Personal Expense Tracker") {
      window.open("https://tracexpense.vercel.app/", "_blank", "noopener,noreferrer");
      return;
    }
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
        {/* 2x2 grid: project1 | project2
                       project3 | growthCard */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
            viewport={{ once: true }}
            className="border border-border bg-card p-6 hover:border-accent transition-all hover:shadow-lg group relative"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold pr-4">{projectsData[0].title}</h3>
              <div className="flex items-center gap-1 text-xs font-mono text-success">
                <Activity size={12} className="animate-pulse" />
                <span>{projectsData[0].status}</span>
              </div>
            </div>
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
              {projectsData[0].description}
            </p>
            <div className="mb-4">
              <p className="text-xs font-mono text-muted-foreground mb-2">TECH STACK</p>
              <div className="flex flex-wrap gap-2">
                {projectsData[0].tech.map((tech, i) => (
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
                {projectsData[0].features.map((feature, i) => (
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
              onClick={() => handleView(projectsData[0])}
            >
              View Details
              <ArrowUpRight size={14} className="ml-2" />
            </Button>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
            viewport={{ once: true }}
            className="border border-border bg-card p-6 hover:border-accent transition-all hover:shadow-lg group relative"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold pr-4">{projectsData[1].title}</h3>
              <div className="flex items-center gap-1 text-xs font-mono text-success">
                <Activity size={12} className="animate-pulse" />
                <span>{projectsData[1].status}</span>
              </div>
            </div>
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
              {projectsData[1].description}
            </p>
            <div className="mb-4">
              <p className="text-xs font-mono text-muted-foreground mb-2">TECH STACK</p>
              <div className="flex flex-wrap gap-2">
                {projectsData[1].tech.map((tech, i) => (
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
                {projectsData[1].features.map((feature, i) => (
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
              onClick={() => handleView(projectsData[1])}
            >
              View Details
              <ArrowUpRight size={14} className="ml-2" />
            </Button>
          </motion.div>
          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
            viewport={{ once: true }}
            className="border border-border bg-card p-6 hover:border-accent transition-all hover:shadow-lg group relative"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold pr-4">{projectsData[2].title}</h3>
              <div className="flex items-center gap-1 text-xs font-mono text-success">
                <Activity size={12} className="animate-pulse" />
                <span>{projectsData[2].status}</span>
              </div>
            </div>
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
              {projectsData[2].description}
            </p>
            <div className="mb-4">
              <p className="text-xs font-mono text-muted-foreground mb-2">TECH STACK</p>
              <div className="flex flex-wrap gap-2">
                {projectsData[2].tech.map((tech, i) => (
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
                {projectsData[2].features.map((feature, i) => (
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
              onClick={() => handleView(projectsData[2])}
            >
              View Details
              <ArrowUpRight size={14} className="ml-2" />
            </Button>
          </motion.div>
          {/* Growth Card - bottom-right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GrowthCard projects={projectsData} />
          </motion.div>
        </div>
      </div>
      {activeProject && (
        <CreativeModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
};
export default Projects;