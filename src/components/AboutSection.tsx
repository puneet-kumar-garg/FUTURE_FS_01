import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Code2, Download } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.E. in Computer Science & Engineering at Chandigarh University",
  },
  {
    icon: Code2,
    title: "Focus Areas",
    text: "Web Development, Data Structures, Object-Oriented Programming",
  },
  {
    icon: Target,
    title: "Career Goal",
    text: "Seeking opportunities to apply skills as a Software Engineering Intern",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">// about me</p>
          <h2 className="text-4xl font-bold">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          I am a Computer Science and Engineering student at Chandigarh University with a strong interest in software development and problem-solving. I have experience building web-based applications using technologies such as HTML, CSS, JavaScript, and MySQL, along with a foundational understanding of data structures and object-oriented programming. I am actively learning modern development technologies.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300 group"
            >
              <c.icon className="text-primary mb-4 group-hover:text-glow transition-all" size={28} />
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a
            href="/Puneet_Kumar_Garg_Resume.pdf"
            download="Puneet_Kumar_Garg_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
