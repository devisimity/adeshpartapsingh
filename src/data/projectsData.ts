// Project data
export const projectsData = [
  {
    id: 1,
    title: "Stewarts Platform",
    description: "Developed a 6 arms ball balancing robot ",
    image: "/lovable-uploads/bbc220fe-1d3e-43b6-a1d4-da913bfb2bec.png",
    technologies: ["Python", "Computer Vision", "Embedded Systems"],
    categories: ["robotics"],
    details: [
      "Used I2C to transfer real-time co-ordinates of ball from Camera to Arduino",
      "Used UART to control a 6 pin Motor controller",
      "Designed and printed parts of the robot using SolidWorks",
      "Created web-based monitoring dashboard",
      "Tuned multi-axis PID controllers in Python/C++ for fast, stable response and minimized overshoot during dynamic balancing tasks."
    ],
    date: "2024"
  },
  {
    id: 2,
    title: "Digiresfolio.com",
    description: "A platform for students and professionals to upload their projects and resumes.",
    image: "/lovable-uploads/66c657f2-abd6-45b0-afa3-1b81c4b352e2.png",
    technologies: ["IoT", "ESP32", "MQTT", "Web Development"],
    categories: ["software"],
    details: [
      "Developed a full-stack web app that allows students to upload their portfolios and share them with potential employers",
      "Added 6 templates for students to choose from",
      "Created cloud-based data processing pipeline",
      "Developed mobile app for remote monitoring"
    ],
    date: "2022"
  },
  {
    id: 3,
    title: "Battery Management System",
    description: "Battery Management System (BMS) using Infineon TLE9018.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["C++", "Motor Control", "FPGA", "Control Systems"],
    categories: ["embedded"],
    details: [
      "Designed a Battery Management System (BMS) using Infineon TLE9018 for passive cell balancing, with SPI communication to the TC399 microcontroller.",
      "Implemented cell monitoring and balancing logic to ensure voltage uniformity across cells, improving pack efficiency and safety.",
      "Configured SPI communication protocols between the TLE9018 daisy-chained cell monitors and the Aurix TC399 for real-time diagnostics and control."
    ],
    date: "2022"
  },
  {
    id: 4,
    title: " JARVIS AI Assistant",
    description: "Designed an affordable, 3D-printed prosthetic hand with EMG sensor integration for intuitive control by the user.",
    image: "/lovable-uploads/cfe62250-a15b-4718-a769-95e611ab008b.png",
    technologies: ["CAD", "3D Printing", "Arduino", "EMG Sensing"],
    categories: ["software"],
    details: [
      "Developed a desktop AI assistant (Jarvis) that automates tasks like replying to emails, booking meetings, and opening websites using natural language commands.",
      "Integrated with n8n workflows to trigger backend automation such as calendar scheduling, web navigation, and third-party app actions.",
      "Leveraged OpenAI’s GPT model for conversational context and intelligent task interpretation.",
      "Built a seamless voice or text interface for real-time interaction, enhancing user productivity and task efficiency."
    ],
    date: "2021"
  },
  {
    id: 5,
    title: "Battery Passports",
    description: "Developed a wearable device that harvests kinetic energy from body movement to power small electronic devices or charge batteries.",
    image: "/lovable-uploads/ddabb65d-bbcf-4aa0-8c86-335d1b4fd973.png",
    technologies: ["Energy Harvesting", "Power Electronics", "PCB Design", "Embedded Systems"],
    categories: ["embedded", "mechanical"],
    details: [
      "Developed a Battery Passport system to store and track individual cell data using SEMPER NOR Flash memory.",
      "Established SPI communication between SEMPER NOR Flash and Infineon TLE9018 to transfer and log real-time cell voltage and temperature data.",
      "Designed a scalable data structure for storing per-cell diagnostics, enabling lifecycle tracking and traceability.",
      "Optimized SPI protocol handling for efficient read/write operations between the memory module and BMS controller."
    ],
    date: "2021"
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "Built a real-time data capture and visualization system using Grafana and InfluxDB to monitor temperature and rate of heat exchange.Programmed custom dashboards and data pipelines for live industrial metrics and performance analysis..",
    image: "/lovable-uploads/4b8456c3-b64e-41a9-b9f2-e8b28be41d07.png",
    technologies: ["Data Capture", "Python", "Industrial Automation"],
    categories: ["control","iot"],
    details: [
      "Designed a real-time data visualization system using Grafana and InfluxDB to monitor temperature and rate of heat exchange.",
      "Programmed data pipelines to capture and store live sensor data from industrial equipment using Python and REST APIs.",
      "Developed dynamic dashboards with custom panels for trend analysis, threshold alerts, and operational insights.",
      "Implemented data aggregation and transformation logic to ensure accurate and meaningful real-time display of metrics."
    ],
    date: "2020"
  },
    {
    id: 7,
    title: "Zebra Printer Automation",
    description: "Developed a fully automated label printing system using Zebra ZPL protocol, integrated into Ignition HMI to streamline part labeling across a high-volume Tesla production line.",
    image: "/lovable-uploads/18401b4d-ef59-44a0-8732-4c9eea9424c1.png",
    technologies: ["ZPL Protocol", "Python", "Industrial Automation", "HMI"],
    categories: ["control","automation"],
    details: [
      "Engineered a dynamic HMI screen with real-time template selection and input validation to support multiple product lines and version-controlled label data.",
      "Programmed Python-based backend logic to format user inputs into ZPL strings and transmit them over TCP/IP directly to Zebra printers, eliminating manual steps.",
      "Collaborated with controls and MES teams to synchronize label printing with plant-wide material tracking and inventory flow.",
      "Implemented data aggregation and transformation logic to ensure accurate and meaningful real-time display of metrics."
    ],
    date: "2020"
  },
  {
    id: 8,
    title: "Zebra Printer Automation",
    description: "Developed a fully automated label printing system using Zebra ZPL protocol, integrated into Ignition HMI to streamline part labeling across a high-volume Tesla production line.",
    image: "/lovable-uploads/18401b4d-ef59-44a0-8732-4c9eea9424c1.png",
    technologies: ["ZPL Protocol", "Python", "Industrial Automation", "HMI"],
    categories: ["control","automation"],
    details: [
      "Engineered a dynamic HMI screen with real-time template selection and input validation to support multiple product lines and version-controlled label data.",
      "Programmed Python-based backend logic to format user inputs into ZPL strings and transmit them over TCP/IP directly to Zebra printers, eliminating manual steps.",
      "Collaborated with controls and MES teams to synchronize label printing with plant-wide material tracking and inventory flow.",
      "Implemented data aggregation and transformation logic to ensure accurate and meaningful real-time display of metrics."
    ],
    date: "2020"
  },
  {
    id: 9,
    title: "Zebra Printer Automation",
    description: "Developed a fully automated label printing system using Zebra ZPL protocol, integrated into Ignition HMI to streamline part labeling across a high-volume Tesla production line.",
    image: "/lovable-uploads/18401b4d-ef59-44a0-8732-4c9eea9424c1.png",
    technologies: ["ZPL Protocol", "Python", "Industrial Automation", "HMI"],
    categories: ["control","automation"],
    details: [
      "Engineered a dynamic HMI screen with real-time template selection and input validation to support multiple product lines and version-controlled label data.",
      "Programmed Python-based backend logic to format user inputs into ZPL strings and transmit them over TCP/IP directly to Zebra printers, eliminating manual steps.",
      "Collaborated with controls and MES teams to synchronize label printing with plant-wide material tracking and inventory flow.",
      "Implemented data aggregation and transformation logic to ensure accurate and meaningful real-time display of metrics."
    ],
    date: "2020"
  }
];

// Experience data
export const experiencesData = [
    {
    company: "Tesla",
    role: "Controls Engineering Intern",
    duration: "May'25 - August'25",
    location: "San Diego, California",
    description: "Controls Engineer responsible for monitoring and optimizing environmental control systems in a cell manufacturing unit to ensure stable and efficient operation..",
    highlights: [
      "Design, implement, and maintain PLC-based control systems for temperature, airflow, and humidity regulation.",
      "Utilize data visualization tools like Grafana to display and analyze heat transfer and other process data in real-time.",
      "Created a custom HMI (Human-Machine Interface) enabling operators to input packaging information, which is transmitted over TCP/IP to automate the label printing process.",
    ]
  },
  {
    company: "Motorola Solutions Inc",
    role: "Software Development Co-op",
    duration: "Jan'25 - April'25",
    location: "Concord, Ontario",
    description: "Leading the development of next-generation autonomous robotic systems for industrial applications.",
    highlights: [
      "Built an internal dashboard to allow technicians to modify radio parameters in real time, improving communication reliability in field units.",
      "Conducted network vulnerability scans using Nessus and Tenable.io to identify open ports, insecure gateways, and potential threats prior to deployment of communication devices used by law enforcement.",
      "Worked on signal stability testing software, contributing to improved system uptime and reduced communication drops.",
      "Secured two patents for novel mechanical-electronic interfaces"
    ]
  },
  {
    company: "Neutron Controls Engineer",
    role: "Embedded Systems Engineer",
    duration: "May 2024 - August 2024",
    location: "Ottawa, Ontario",
    description: "Designed precision motion control systems for medical imaging and surgical equipment.",
    highlights: [
      "Developed ultra-precise positioning system for MRI-compatible surgical robot",
      "Reduced system noise by 65% through innovative damping solution",
      "Created embedded control firmware for real-time operation",
      "Contributed to FDA certification documentation for Class II medical device"
    ]
  },
  {
    company: "Accelerated Systems Inc",
    role: "Graduate Research Assistant",
    duration: "September 2023 - December 2023",
    location: "Waterloo, Ontario",
    description: "Conducted research on novel sensor fusion techniques and their application in autonomous systems.",
    highlights: [
      "Designed a novel sensor fusion algorithm for autonomous navigation",
      "Implemented real-time data processing pipeline for multi-sensor systems",
      "Published research findings in IEEE Robotics conference",
      "Created open-source library for sensor fusion implementations"
    ]
  }
];

// Filter categories
export const categories = [
  { value: "all", label: "All Projects" },
  { value: "robotics", label: "Robotics" },
  { value: "automation", label: "Automation" },
  { value: "embedded", label: "Embedded Systems" },
  { value: "software", label: "Software" },
  { value: "iot", label: "IoT" },
  { value: "control", label: "Control Systems" },
];
