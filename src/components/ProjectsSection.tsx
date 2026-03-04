import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Study Share Hub",
    description:
      "A collaborative web platform that enables students to upload, manage, and access educational worksheets through a subject-based dashboard, improving academic resource sharing and accessibility.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "shadcn-ui"],
    github: "https://github.com/puneet-kumar-garg/study-share-hub-v2",
    live: "https://study-share-hub-v2.vercel.app/",
  },
  {
    title: "MediRouteAI",
    description:
      "MediRouteAI is a smart ambulance navigation system that uses real-time GPS tracking and traffic signal prioritization to optimize emergency routes, helping reduce response time and improve patient transportation efficiency.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Leaflet"],
    github: "https://github.com/puneet-kumar-garg/mediroute-ai",
    live: "https://medirouteai.vercel.app/",
  },
  {
    title: "Lost Device Tracker",
    description:
      "LostDevice is a web-based platform that allows users to report, search, and connect over lost electronic devices through a secure authentication system and real-time user interaction.",
    tech: ["React.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/puneet-kumar-garg/lostdevice",
    live: "https://lostdevices.netlify.app/",
  },
  {
    title: "Nike E-Commerce Testing Automation",
    description:
      "Built an end-to-end automation framework using Selenium and TestNG for an e-commerce platform. Implemented cross-browser testing with Selenium Grid and reduced manual testing effort by 40% through structured reporting and reusable test architecture.",
    tech: ["Java", "Selenium", "TestNG", "Selenium Grid"],
    github: "https://github.com/puneet-kumar-garg/NikeAutomation",
    live: "#",
  },
  {
    title: "OrthoVita – AI Physiotherapy Assistant",
    description:
      "An AI-powered web app that tracks rehabilitation exercises using real-time pose detection and provides instant posture correction through joint angle analysis.",
    tech: ["React.js", "Zustand", "TailwindCSS", "MediaPipe Pose", "Node.js", "Express.js", "Gemini API"],
    github: "https://github.com/Coffee-0verflow/OrthoVita",
    live: "https://orthovita.vercel.app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">// projects</p>
          <h2 className="text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="glass rounded-xl p-6 flex flex-col hover:border-primary/30 hover:box-glow transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
