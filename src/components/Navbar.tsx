import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="glass rounded-full px-8 py-4 shadow-2xl backdrop-blur-2xl border border-border/30">
          <div className="flex items-center justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 px-3 py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
