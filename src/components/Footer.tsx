import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-border bg-terminal-bg text-terminal-text py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm font-mono">
            <span className="text-muted-foreground">Session Time: </span>
            <span className="text-accent">
              {time.toLocaleTimeString("en-US", { hour12: false })}
            </span>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            <p>Built with React.js, Tailwind & Recharts</p>
            <p className="mt-1">© 2025 Gourav Mewara. All strategies proprietary.</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/gourav-mewara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Gouravm1523"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:gouravmewara635@gmail.com"
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            {/* Resume: opens in a new tab. Assumes the file is /RR1.pdf in public/ */}
            <a
              href="/RR1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Open Resume"
            >
              <FileDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
