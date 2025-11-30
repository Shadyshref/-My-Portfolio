import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="text-white px-4 sm:px-10 md:px-20 pt-20 md:pt-40"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <p className="font-bold">
            Hello, It's Me <br />
            <strong className="text-3xl">Shady Sherif</strong> <br />
            And I'am a{" "}
            <strong className="text-[#4CB7F5]">FullStack Web Developer</strong>
          </p>

          <div className="mt-4 text-gray-300 text-[13px] leading-5">
            <p>I am a Full Stack Web Developer with two years of experience.</p>
            <p>
              I build responsive front-end interfaces and secure back-end
              systems.
            </p>
            <p>
              I create innovative web solutions that improve user experience.
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            <SocialIcon
              href="https://www.facebook.com/share/1CrXiuGv2r/"
              icon={<FaFacebookF />}
              type="facebook"
            />
            <SocialIcon
              href="https://wa.me/+201140205447"
              icon={<FaWhatsapp />}
              type="whatsapp"
            />
            <SocialIcon
              href="https://www.instagram.com/shadyshref.30"
              icon={<FaInstagram />}
              type="instagram"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/shady-elbadry-1b2344337"
              icon={<FaLinkedinIn />}
              type="linkedin"
            />
          </div>

          <button
            onClick={() => {
              const Aboutme = document.getElementById("Aboutme");
              if (Aboutme) {
                Aboutme.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 bg-blue-400 rounded-2xl px-4 py-2 text-[10px] cursor-pointer text-blue-950 shadow-lg hover:bg-blue-300 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {" "}
            More About me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center flex-1"
        >
          <div className="absolute w-36 h-36 bg-[#1aa0ee] opacity-90 blur-xl rounded-full top-10 md:top-0"></div>
          <div className="absolute w-44 h-44 bg-blue-700 opacity-40 blur-2xl rounded-full"></div>
          <div className="absolute -top-10 w-28 h-28 bg-purple-500 blur-2xl rounded-full"></div>
          <div className="absolute -bottom-10 w-28 h-28 bg-purple-600 blur-2xl rounded-full"></div>

          <img
            src="/PROTFOLIO-WEB/images/photo.jpg"
            className="w-52 h-52 sm:w-60 sm:h-60 rounded-full object-cover border-2 border-white shadow-lg relative z-10"
            alt="profile"
          />
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, type }) => {
  let classes =
    "w-12 h-12 flex items-center justify-center rounded-full text-[#4CB7F5] shadow-lg transition-all";

  if (type === "facebook")
    classes += " border-blue-600 hover:bg-blue-600 hover:text-white";
  if (type === "whatsapp")
    classes += " border-green-500 hover:bg-green-500 hover:text-white";
  if (type === "linkedin")
    classes += " border-blue-700 hover:bg-blue-700 hover:text-white";
  if (type === "instagram")
    classes += " relative overflow-hidden border-[#4CB7F5] hover:text-white";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {type === "instagram" && (
        <span className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 opacity-0 hover:opacity-100 rounded-full transition-opacity duration-300"></span>
      )}
      <span className="relative z-10 text-xl">{icon}</span>
    </a>
  );
};

export default Home;
