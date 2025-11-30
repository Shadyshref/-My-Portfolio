import { motion } from "framer-motion";

const Projects = () => {
  const lprojects = [
    {
      img: "/-My-Portfolio/images/Picture1.png",
      name: "Stream chat",
      link: "https://github.com/Shadyshref/stream-chat",
    },
    {
      img: "/-My-Portfolio/images/Picture2.png",
      name: "Project management",
      link: "https://github.com/Shadyshref/project-managment",
    },
    {
      img: "/-My-Portfolio/images/Picture3.png",
      name: "E-commerce",
      link: "https://github.com/Shadyshref/Full-stack-e-commerce-web",
    },
  ];

  return (
    <section id="projects" className="mt-60 scroll-mt-[80px] px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-white text-center text-4xl font-bold">
          Latest <span className="text-[#4CB7F5]">Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {lprojects.map((pro, index) => (
            <div
              key={index}
              className="bg-[#0f112f] p-5 rounded-xl shadow-lg hover:shadow-[#4CB7F5] transition-shadow flex flex-col items-start gap-4"
            >
              <img
                src={pro.img}
                alt={pro.name}
                className="w-full h-48 sm:h-56 md:h-48 object-contain bg-transparent rounded-lg"
              />

              <h4 className="text-xl font-bold text-white">{pro.name}</h4>

              <a
                href={pro.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-blue-300 hover:text-white transition"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
