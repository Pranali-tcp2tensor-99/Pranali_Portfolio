import { RiH4 } from "react-icons/ri";
import profilePic from "../assets/Pranali_Ganesh_Profile.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-30">
      <div className="flex flex-wrap lg:flex-row-reverse">


        
         {/* Image Section */}

       <div className="w-full lg:w-1/2">
  <div className="flex justify-center items-center lg:p-4">
    <motion.div
      initial={{ x: 100, y: 50, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative"
    >
    
      {/* Profile Image */}
      <img
        src={profilePic} // Keep your actual import path
        alt="Pranali Ganesh"
        className="
          relative z-10
          rounded-1xl
          w-[310px] h-[460px]
          object-cover
          border-[0px] border-white
          shadow-2g
        "
      />
    </motion.div>
  </div>
</div>
       
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h6
              variants={childVariants}
              className="pb-2 text-2xl tracking-tighter lg:text-5xl"
            >
              Pranali Krishna Ganesh
            </motion.h6>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <span className="text-4xl">AI/ML & WEB Developer</span>
              <br />
              <span className="text-2xl">Networking and IoT Enthusiast</span>
            </motion.span>

            <motion.p
              variants={childVariants}
              className="mt-6 text-xm text-justify text-white"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href="/PranaliGanesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-indigo-500 hover:to-purple-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </div>




      </div>
    </div>
  );
};

export default Hero;
