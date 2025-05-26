import { CONTACT } from "../constants";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-10 text-center text-5xl font-bold tracking-tight"
      >
        Get in <span className="text-teal-400">Touch</span>
      </motion.h2>

      {/* Animated Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto grid gap-6 text-center text-lg text-stone-300"
      >
        <div className="flex items-center justify-center gap-3">
          <FiMapPin className="text-teal-400 text-2xl" />
          <p>{CONTACT.address}</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <FiMail className="text-teal-400 text-2xl" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-teal-300 underline underline-offset-4 transition"
          >
            {CONTACT.email}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
