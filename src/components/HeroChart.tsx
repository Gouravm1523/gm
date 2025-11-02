import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { year: "2022", react: 40, python: 45, ml: 20 },
  { year: "2023", react: 60, python: 65, ml: 45 },
  { year: "2024", react: 75, python: 78, ml: 70 },
  { year: "2025", react: 85, python: 82, ml: 80 },
  { year: "2026", react: 90, python: 88, ml: 85 },
];

const HeroChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col min-h-[400px]"
    >
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-1">Skill Growth Trajectory</h3>
        <p className="text-xs text-muted-foreground font-mono">Proficiency Level Over Time</p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="year" 
            stroke="hsl(var(--muted-foreground))" 
            style={{ fontSize: "12px", fontFamily: "JetBrains Mono" }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            style={{ fontSize: "12px", fontFamily: "JetBrains Mono" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "4px",
              fontSize: "12px",
              fontFamily: "JetBrains Mono",
            }}
          />
          <Line
            type="monotone"
            dataKey="react"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
            name="React.js"
          />
          <Line
            type="monotone"
            dataKey="python"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
            name="Python"
          />
          <Line
            type="monotone"
            dataKey="ml"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-3))", r: 4 }}
            name="ML"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default HeroChart;
