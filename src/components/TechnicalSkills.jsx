import { motion } from "framer-motion";

import { FaJs, FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import SkillSection from "./SkillSection";

const technicalSkills = [
  { icon: <FaJs />, name: "JavaScript", level: 90, color: "#F7DF1E" },
  { icon: <FaReact />, name: "React", level: 80, color: "#61DBFB" },
  { icon: <FaNodeJs />, name: "Node.js", level: 90, color: "#3C873A" },
  { icon: <SiNextdotjs />, name: "Next.js", level: 70, color: "#EDEDED" },
  { icon: <FaCss3Alt />, name: "CSS / Tailwind", level: 85, color: "#264DE4" },
];

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="mt-70 px-5 scroll-mt-[80px]  py-10 rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Technical <span className="text-[#4CB7F5]">Skills</span>
        </h2>
        <div className="max-w-xl mx-auto">
          {technicalSkills.map((skill, index) => (
            <SkillSection
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnicalSkills;
