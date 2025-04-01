
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";

// Project data
const projects = [
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
const experiences = [
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
const categories = [
  { value: "all", label: "All Projects" },
  { value: "robotics", label: "Robotics" },
  { value: "automation", label: "Automation" },
  { value: "embedded", label: "Embedded Systems" },
  { value: "mechanical", label: "Mechanical Design" },
  { value: "iot", label: "IoT" },
  { value: "control", label: "Control Systems" },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTab, setSelectedTab] = useState("projects");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-bold mb-6">Projects & Experience</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore my portfolio of mechatronics projects and professional experience.
            </p>
          </div>

          <Tabs 
            defaultValue="projects" 
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="flex justify-center mb-12">
              {/* Added border-2 and border-techblue/30 for the outline, with rounded-lg to match the image */}
              <div className="border-2 border-techblue/30 dark:border-techblue/40 rounded-lg p-1 bg-gray-100/50 dark:bg-gray-800/50">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="projects" className="text-lg py-3">Projects</TabsTrigger>
                  <TabsTrigger value="experience" className="text-lg py-3">Experience</TabsTrigger>
                </TabsList>
              </div>
            </div>
            
            <TabsContent value="projects">
              {/* Filter buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setActiveCategory(category.value)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeCategory === category.value
                        ? "bg-techblue text-white"
                        : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              {/* Projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="tech-card group overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.categories.map((cat) => (
                          <Badge key={cat} variant="secondary" className="font-normal">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                          {project.details.slice(0, 2).map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block text-xs bg-blue-50 dark:bg-blue-900/20 text-techblue px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Empty state */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-16">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
                    ></path>
                  </svg>
                  <h3 className="text-xl font-bold mb-2">No projects found</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Try selecting a different category.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="experience">
              <div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative pl-8 mb-12 last:mb-0"
                  >
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-techblue flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    
                    <div className="tech-card p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</span>
                      </div>
                      <h4 className="text-lg font-medium text-techblue mb-3">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
