import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroChart from "./HeroChart";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <section id="hero" className="min-h-screen pt-[1.70rem] pb-16 px-4 grid-bg">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-start">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-border bg-card p-8 md:p-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-success animate-pulse" size={16} />
              <span className="text-xs font-mono text-success">MARKET STATUS: OPEN & READY TO INVEST</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <img
                src={profileImage}
                alt="Gourav Mewara"
                className="w-24 h-24 rounded-full border-2 border-accent object-cover"
              />
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  GOURAV MEWARA
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Computer Science Engineer
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-mono border border-accent/20">
                FinTech
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-mono border border-accent/20">
                AI
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-mono border border-accent/20">
                Full Stack
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-baseline gap-3 font-mono">
                <span className="text-sm text-muted-foreground">CGPA</span>
                <span className="text-2xl font-semibold">8.1/10.0</span>
                <span className="text-sm text-success">↑</span>
              </div>
              <div className="flex items-baseline gap-3 font-mono">
                <span className="text-sm text-muted-foreground">Projects</span>
                <span className="text-2xl font-semibold">3 Active</span>
                <span className="text-sm text-success">↑</span>
              </div>
              <div className="flex items-baseline gap-3 font-mono">
                <span className="text-sm text-muted-foreground">Experience</span>
                <span className="text-2xl font-semibold">Frontend Dev</span>
                <span className="text-sm text-accent">▶</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              Computer Science Engineering student with proven execution in software development, 
              machine learning, and financial technology. Built responsive applications that delivered 
              measurable improvements in user engagement and performance. Operating in Agile environments 
              with a strong problem-solving approach and growing expertise in FinTech innovation.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Initiate Collaboration →
            </Button>
          </motion.div>

          {/* Right Panel - Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-border bg-card p-6 h-[500px]"
          >
            <HeroChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
