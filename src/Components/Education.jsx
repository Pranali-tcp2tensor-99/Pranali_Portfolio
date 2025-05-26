import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in E&TC Engineering",
    institute: "Vishwakarma Institute of Information Technology, Pune",
    duration: "2023 - 2026",
    score: "CGPA: 8.9 (Till Date)",
  },
  {
    degree: "Diploma in Electronics and Telecommunication",
    institute: "Government Polytechnic, Pune",
    duration: "2020 - 2023",
    score: "Percentage: 91.60%",
  },
  {
    degree: "SSC - Secondary School Certificate",
    institute: "Sadhana English Medium School, Hadapsar",
    duration: "2019 - 2020",
    score: "Percentage: 92.80%",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <div className="py-10 bg-black text-white">
      <motion.h2
        whileInView="visible"
        initial="hidden"
        variants={containerVariants}
        className="text-center text-4xl font-bold tracking-wide mb-16"
      >
        <FaGraduationCap className="inline-block mr-2 mb-1 text-purple-500" />
        Education
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto px-4 flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition duration-300"
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-purple-400 mb-2">
              {edu.degree}
            </h3>
            <p className="text-lg">{edu.institute}</p>
            <p className="text-sm text-gray-400">{edu.duration}</p>
            <p className="text-sm text-gray-300">{edu.score}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
