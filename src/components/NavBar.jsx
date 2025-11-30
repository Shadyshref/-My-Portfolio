import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "Aboutme" },
    { name: "Services", id: "services" },
    { name: "Project", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f112f] text-white z-50 px-5 md:px-10 h-[60px] flex items-center justify-between">
      <h2 className="text-3xl font-bold">Portfolio</h2>

      <div className="md:hidden z-50" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      <ul
        className={`
          md:flex md:gap-8 md:items-center md:static absolute top-[60px] left-0 w-full md:w-auto bg-[#0f112f] md:bg-transparent
          flex flex-col items-center gap-4 md:flex-row transition-all duration-300
          ${open ? "block" : "hidden"}
        `}
      >
        {links.map((link, i) => (
          <li
            key={i}
            onClick={() => scrollToSection(link.id)}
            className="hover:underline hover:text-[#4CB7F5] cursor-pointer text-lg md:text-base"
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
