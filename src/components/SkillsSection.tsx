import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C/C++", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js"],
  },
  {
    title: "Testing Tools",
    skills: ["Selenium"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Google Workspace"],
  },
  {
    title: "Relevant Coursework",
    skills: ["Data Structures & Algorithms", "OOPs"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative w-full">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">// skills</p>
          <h2 className="text-4xl font-bold">
            Tech <span className="text-accent">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:border-primary hover:glow-border transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground rounded-lg text-sm font-medium"
                  >
                    {skill}
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

export default SkillsSection;
