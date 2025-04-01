
// Project data
export const projectsData = [
  {
    id: 1,
    title: "Autonomous Industrial Robot",
    description: "Designed and implemented an autonomous robot for manufacturing environments with advanced navigation capabilities and real-time obstacle avoidance.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Industrial+Robot",
    technologies: ["ROS", "Python", "Computer Vision", "Embedded Systems"],
    categories: ["robotics", "automation"],
    details: [
      "Implemented SLAM algorithms for environment mapping",
      "Integrated multiple sensors for robust perception",
      "Developed fault-tolerant control systems",
      "Created web-based monitoring dashboard"
    ],
    date: "2023"
  },
  {
    id: 2,
    title: "Smart Agriculture Monitoring System",
    description: "Developed an IoT-based system for monitoring and automating agricultural processes with real-time data collection and analysis.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Smart+Agriculture",
    technologies: ["IoT", "ESP32", "MQTT", "Web Development"],
    categories: ["iot", "embedded"],
    details: [
      "Designed custom PCBs for sensor nodes",
      "Implemented low-power optimization techniques",
      "Created cloud-based data processing pipeline",
      "Developed mobile app for remote monitoring"
    ],
    date: "2022"
  },
  {
    id: 3,
    title: "Precision Motion Control Platform",
    description: "Created a high-precision motion control system for medical equipment with sub-micron positioning accuracy and advanced control algorithms.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Motion+Control",
    technologies: ["C++", "Motor Control", "FPGA", "Control Systems"],
    categories: ["control", "embedded"],
    details: [
      "Developed adaptive PID control algorithms",
      "Implemented FPGA-based real-time control",
      "Created calibration routines for high precision",
      "Designed user-friendly configuration interface"
    ],
    date: "2022"
  },
  {
    id: 4,
    title: "3D-Printed Prosthetic Hand",
    description: "Designed an affordable, 3D-printed prosthetic hand with EMG sensor integration for intuitive control by the user.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Prosthetic+Hand",
    technologies: ["CAD", "3D Printing", "Arduino", "EMG Sensing"],
    categories: ["mechanical", "embedded"],
    details: [
      "Created parametric design for custom sizing",
      "Developed EMG signal processing algorithms",
      "Implemented lightweight, durable mechanisms",
      "Designed low-cost control electronics"
    ],
    date: "2021"
  },
  {
    id: 5,
    title: "Energy Harvesting Wearable Device",
    description: "Developed a wearable device that harvests kinetic energy from body movement to power small electronic devices or charge batteries.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Energy+Harvesting",
    technologies: ["Energy Harvesting", "Power Electronics", "PCB Design", "Embedded Systems"],
    categories: ["embedded", "mechanical"],
    details: [
      "Designed efficient piezoelectric energy harvesting system",
      "Created ultra-low power management circuits",
      "Implemented adaptive power optimization algorithms",
      "Developed compact, ergonomic form factor"
    ],
    date: "2021"
  },
  {
    id: 6,
    title: "Automated Quality Inspection System",
    description: "Created a machine vision system for automated quality control in manufacturing with real-time defect detection and classification.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Inspection+System",
    technologies: ["Computer Vision", "Machine Learning", "Python", "Industrial Automation"],
    categories: ["automation", "robotics"],
    details: [
      "Implemented deep learning-based defect detection",
      "Developed custom lighting and imaging system",
      "Created production line integration framework",
      "Designed intuitive operator interface"
    ],
    date: "2020"
  }
];

// Experience data
export const experiencesData = [
  {
    company: "Advanced Robotics Inc.",
    role: "Senior Mechatronics Engineer",
    duration: "2021 - Present",
    description: "Leading the development of next-generation autonomous robotic systems for industrial applications.",
    highlights: [
      "Led team of 5 engineers in developing robotic arm with 7 degrees of freedom",
      "Implemented advanced control algorithms resulting in 35% improvement in precision",
      "Designed modular architecture allowing rapid reconfiguration for different tasks",
      "Secured two patents for novel mechanical-electronic interfaces"
    ]
  },
  {
    company: "Medical Devices Solutions",
    role: "Mechatronics Design Engineer",
    duration: "2018 - 2021",
    description: "Designed precision motion control systems for medical imaging and surgical equipment.",
    highlights: [
      "Developed ultra-precise positioning system for MRI-compatible surgical robot",
      "Reduced system noise by 65% through innovative damping solution",
      "Created embedded control firmware for real-time operation",
      "Contributed to FDA certification documentation for Class II medical device"
    ]
  },
  {
    company: "Smart Systems Lab, University Research",
    role: "Graduate Research Assistant",
    duration: "2016 - 2018",
    description: "Conducted research on novel sensor fusion techniques and their application in autonomous systems.",
    highlights: [
      "Published 3 peer-reviewed papers on advanced sensor fusion algorithms",
      "Developed proof-of-concept for multi-modal sensor integration",
      "Created open-source software library for sensor calibration",
      "Mentored undergraduate students on research projects"
    ]
  }
];

// Filter categories
export const categories = [
  { value: "all", label: "All Projects" },
  { value: "robotics", label: "Robotics" },
  { value: "automation", label: "Automation" },
  { value: "embedded", label: "Embedded Systems" },
  { value: "mechanical", label: "Mechanical Design" },
  { value: "iot", label: "IoT" },
  { value: "control", label: "Control Systems" },
];
