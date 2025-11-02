import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

/**
 * IMPORTANT:
 * Replace this constant with your Formspree endpoint, e.g.
 * const FORM_ENDPOINT = "https://formspree.io/f/abcdxyz";
 */
const FORM_ENDPOINT = "https://formspree.io/f/xldoanwn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("Message sent", {
          description: "Thanks — I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Safely parse JSON and extract an error message (no `any`)
        const raw = await res.json().catch(() => null);
        let errMsg = "Failed to send message. Try again later.";

        if (raw && typeof raw === "object") {
          const obj = raw as Record<string, unknown>;

          // Formspree sometimes returns { error: "..." }
          if (typeof obj.error === "string" && obj.error.trim()) {
            errMsg = obj.error;
          } else if (Array.isArray(obj.errors) && obj.errors.length > 0) {
            // errors can be an array of objects; try to collect .message fields
            const parts = obj.errors
              .map((it) => {
                if (it && typeof it === "object") {
                  const itObj = it as Record<string, unknown>;
                  if (typeof itObj.message === "string") return itObj.message;
                  // fallback to JSON string if useful
                  try {
                    return JSON.stringify(itObj);
                  } catch {
                    return String(itObj);
                  }
                }
                return String(it);
              })
              .filter(Boolean);
            if (parts.length) errMsg = parts.join(", ");
          }
        }

        toast.error("Send failed", { description: errMsg });
      }
    } catch (err) {
      toast.error("Network error", {
        description: "Couldn't send the message. Check your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">INVEST NOW</h2>
          <p className="text-muted-foreground font-mono text-sm">
            Initiate collaboration opportunity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-border bg-card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-2 block">
                NAME
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent px-0"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-muted-foreground mb-2 block">
                EMAIL
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent px-0"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-muted-foreground mb-2 block">
                MESSAGE
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent px-0 resize-none"
                placeholder="Enter your message"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-green-700 hover:text-accent-foreground"
              size="lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "SUBMIT ORDER"}
              <Send size={16} className="ml-2" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs font-mono text-muted-foreground mb-4 text-center">
              DIRECT CHANNELS
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:gouravmewara635@gmail.com"
                className="flex items-center gap-3 p-3 border border-border hover:border-accent transition-all text-sm group"
              >
                <Mail size={18} className="text-muted-foreground group-hover:text-accent" />
                <span className="text-xs font-mono truncate">gouravmewara635@gmail.com</span>
              </a>
              <a
                href="tel:+919216872644"
                className="flex items-center gap-3 p-3 border border-border hover:border-accent transition-all text-sm group"
              >
                <Phone size={18} className="text-muted-foreground group-hover:text-accent" />
                <span className="text-xs font-mono">+91 9216872644</span>
              </a>
              <a
                href="https://linkedin.com/in/gourav-mewara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-border hover:border-accent transition-all text-sm group"
              >
                <Linkedin size={18} className="text-muted-foreground group-hover:text-accent" />
                <span className="text-xs font-mono">/gourav-mewara</span>
              </a>
              <a
                href="https://github.com/Gouravm1523"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-border hover:border-accent transition-all text-sm group"
              >
                <Github size={18} className="text-muted-foreground group-hover:text-accent" />
                <span className="text-xs font-mono">/Gouravm1523</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
