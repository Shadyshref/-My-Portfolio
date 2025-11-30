import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <section
      id="Aboutme"
      className="mt-70 scroll-mt-[80px] px-4 sm:px-10 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start w-full md:w-auto relative"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-[#1aa0ee] opacity-90 blur-xl rounded-full"></div>
            <div className="absolute w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-blue-700 opacity-40 blur-2xl rounded-full"></div>
            <div className="absolute -top-5 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-purple-500 blur-2xl rounded-full"></div>
            <div className="absolute -bottom-5 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-purple-600 blur-2xl rounded-full"></div>

            <img
              src="/-My-Portfolio/images/photo.jpg"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover border-[3px] border-white shadow-lg relative z-10"
              alt="profile"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white w-full md:w-1/2"
        >
          <h1 className="text-3xl font-bold">
            About <span className="text-[#4CB7F5]">Me</span>
          </h1>
          <h2 className="text-2xl font-bold mt-2">Full Stack Developer</h2>

          <p className="text-[13px] leading-5 mt-4 text-gray-300">
            I am a Full Stack Web Developer with two years of experience in both
            internships and professional work.
            <br />
            I specialize in JavaScript and TypeScript for building dynamic web
            applications.
            <br />
            I work extensively with React, Next.js, Node.js, and Express.js.
            <br />
            I am experienced in NestJS for building scalable back-end systems.
            <br />
            I handle both SQL and NoSQL databases, including Prisma, MongoDB,
            Firebase, and Neon Database.
            <br />
            I use Tailwind CSS and SCSS for styling responsive and modern UI.
            <br />
            I am skilled with state management using React Query, Zustand, Redux
            Toolkit, and Redux.
            <br />
            I also work with UI libraries like DaisyUI and Material UI to build
            polished interfaces.
            <br />
            I am proficient in version control with Git and GitHub for
            collaborative development.
            <br />I continuously learn and integrate new technologies to improve
            project quality and user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;
