import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-10 my-20 text-center text-4xl font-serif"
      >
        EXPERIENCE
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mt-6 mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center gap-6"
          >
            {/* Left side: Image and Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex flex-col items-center"
            >
              <img
                src={experience.image}
                alt={experience.company}
                className="w-20 h-20 object-cover rounded-full mb-2 shadow-lg"
              />
              <p className="text-sm text-stone-400">{experience.year}</p>
            </motion.div>

            {/* Right side: Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-bold">
                {experience.company}
                <br />
                <span className="text-sm font-normal text-stone-500">
                  {experience.role}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
