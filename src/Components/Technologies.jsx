import { FaBrain, FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiAmazon, SiFlask, SiGithub, SiMongodb, SiPython, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Technologies = () => {
  return (
    <div className="pb-10">
      <motion.h2 
      whileInView={{ opacity: 1, y:0}}
      initial={{ opacity:0, y:-100}}
      transition={{duration: 1.6}}
      className="my-20 text-center text-4xl font-serif">TECHVERSE SKILLS
      </motion.h2>

      <motion.div 
      whileInView={{ opacity: 1, x:0}}
      initial={{ opacity:0, x:-100}}
      transition={{duration: 1.6}}
     className="flex flex-wrap items-center justify-center gap-8">

         <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4">
          <RiReactjsLine className="text-6xl text-cyan-400" />
         </motion.div>


           <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <FaHtml5 className="text-6xl text-orange-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <FaCss3Alt className="text-6xl text-blue-400" />
        </motion.div>


        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiTailwindcss className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4">
          <FaNodeJs className="text-6xl text-purple-500" /> 
        </motion.div>

        <motion.div
         initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
         className="p-4">
          <SiMongodb className="text-6xl text-cyan-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
           className="p-4">         
          <FaBrain className="text-6xl text-purple-500" /> {/* Machine Learning */}
        </motion.div>

        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        className="p-4">
          <SiFlask className="text-6xl text-cyan-500" />
        </motion.div>

        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        className="p-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLl8_zMO9rvagbkoPSxePUlwDOT3evIkgLFx8CJDiLfMZPO7qez4DvXxJuZdXwUhaAP0&usqp=CAU"
          alt="Java"
          className="w-20 h-20"
        />
       </motion.div>

        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        className="p-4">
          <SiPython className="text-6xl text-yellow-400" />
        </motion.div>

        

        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        className="p-4">
          <SiGithub className="text-6xl text-white" />
        </motion.div>


        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        className="p-3">
          <SiAmazon className="text-6xl text-orange-400" />
      </motion.div>

        
       

      </motion.div>
    </div>
  );
};

export default Technologies;
