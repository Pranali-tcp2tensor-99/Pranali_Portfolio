import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

import AIF from "../assets/Experience/AIF.png";
import SAJ from "../assets/Experience/SAJ.webp";


export const HERO_CONTENT = `Blending code with creativity,I’m a passionate ENTC engineer with strong expertise in Machine Learning, modern web development, and cloud-integrated IoT systems. I specialize in building intelligent, scalable applications using tools like Python, TensorFlow, React, Node.js, and platforms like AWS and Google Cloud. Whether it’s deploying real-time ML models, creating seamless web experiences, or engineering smart IoT solutions, I thrive at the intersection of innovation and impact—crafting tech that solves real-world problems.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  

  {
  year: "Apr '24 – Jun '24",
  image:AIF,
  role: "Intern – PCB Design & Networking",
  company: "Indian Air Force, Pune",
  description: `Worked in PCB Design and Networking departments focusing on circuit efficiency and secure connectivity. Developed and optimized PCB layouts to reduce power consumption and improve reliability. Gained hands-on experience with routers, network configurations, and secured communication protocols. Also contributed to front-end UI and back-end process flows for internal systems.`,
  technologies: ["PCB Design", "Circuit Optimization", "Networking", "UI/UX", "Secure Systems"],
},
{
  year: "Jul '22 – Aug '22",
  image:SAJ ,
  role: "Intern – R&D Department",
  company: "SAJ Test Plant Pvt Ltd",
  description: `Conducted technical presentations on EV system integration and testing frameworks. Explored EV component validation techniques to enhance battery efficiency. Participated in R&D initiatives to develop automated testing solutions for electric vehicle components, with an emphasis on documentation and reporting.`,
  technologies: ["EV Systems", "Battery Validation", "Testing Frameworks", "R&D", "Documentation"],
}
 
];

export const PROJECTS = [

  {
  title: "Developer Portfolio",
  image: project5,
  description:
    "Building a dynamic and visually engaging personal portfolio using React, Tailwind CSS, and Framer Motion for seamless animations. The platform showcases projects, experiences, and technical skills through an interactive, modern UI. Designed to be fully responsive and optimized for performance, this project reflects a strong focus on frontend development, accessibility, and creative web design.",
  technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"]
  },

  {
  title: "AGRI-TECH",
  image: project1,
  description:
    "Developed a smart farming solution integrating ESP32 microcontroller, machine learning neural networks, and Google Cloud services. The system continuously monitors soil and environmental parameters and provides actionable insights to optimize agricultural practices. The platform features a responsive and intuitive UI/UX to enhance user interaction and system accessibility.",
  technologies: ["ESP32", "Machine Learning", "Google Cloud", "Neural Networks"]
  },
  
  {
  title: "Sign Language Recognition System",
  image: project2,
  description:
    "Built a real-time sign language translation system using a Convolutional Neural Network (CNN) and ESP32-CAM module. The system captures hand gestures via the camera, processes them using TensorFlow-based deep learning models, and translates them into text for improved communication accessibility for the deaf and hard-of-hearing.",
  technologies: ["ESP32-CAM", "CNN", "TensorFlow", "Python", "Computer Vision"]
},
{
  title: "Logistic Regression from Scratch",
  image: project3,
  description:
    "Implemented logistic regression algorithm entirely from the ground up using only NumPy for matrix operations. The project focuses on binary classification tasks and serves as an educational tool for understanding gradient descent, sigmoid function, and loss optimization without relying on external ML libraries like Scikit-learn.",
  technologies: ["Python", "NumPy", "Logistic Regression", "Gradient Descent", "Mathematics"]
},
{
  title: "Portable Home Automation System",
  image: project4,
  description:
    "Designed and built a compact IoT-based home automation solution using the ESP8266 microcontroller and Blynk platform. Users can remotely control lights and appliances via a mobile app. The system emphasizes low-power design and portability, making it suitable for on-the-go or temporary smart home setups.",
  technologies: ["ESP8266", "IoT", "Blynk", "Home Automation", "Mobile App Integration"]
},

];

export const CONTACT = {
  address: "B-Tech, Vishwakarma Institute of information Tecchnology ",
  email: "pranaliganesh.9911@gmail.com",
};
