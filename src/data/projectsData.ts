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
    description: "Jarvis is a Python-powered desktop assistant that automates tasks and improves productivity. It uses natural language processing (NLP) and voice recognition to perform actions like opening apps, setting reminders, and fetching information. It integrates with web scraping tools, system monitoring, and smart devices. Customizable and extendable, Jarvis can be tailored to suit individual needs. It enhances your workflow, making everyday tasks more efficient and interactive.",
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
    description: "A digital record system that tracks key battery performance metrics including the number of reusage cycles, State of Health (SOH), State of Charge (SOC), and other critical data. This passport ensures transparency, enhances battery lifecycle management, and supports sustainability by providing a reliable history of battery usage and condition.",
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
    title: "Trading Bot – Personal Project",
    description: "Developed an automated stock trading bot in Python using yfinance for live market data.",
    image: "/lovable-uploads/695ade93-6861-4b65-b3eb-17f08cbdab5d.png",
    technologies: ["Python", "yfinance", "Algorithmic Trading", "OOP Design"],
    categories: ["software"],
    details: [
      "Implemented a buy strategy that triggers when stock price drops ≥10% below a dynamically calculated stable price (5-day moving average).",
      "Designed a modular architecture with price monitoring, buy-condition logic, and mock trade execution, easily extendable to broker APIs (Alpaca, Interactive Brokers, Zerodha).",
      "Built with clean, professional coding practices including OOP design, error handling, and configurable monitoring intervals.",
      "Provides real-time insights via periodic logs and scalable for integration into production-grade algorithmic trading systems."
    ],
    date: "2024"
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
    title: "FPGA Digital Design Projects",
    description: "Designed and implemented a Traffic Light Controller using a state machine architecture on FPGA, ensuring reliable sequencing with well-defined timing constraints.",
    image: "/lovable-uploads/7c57d871-317c-40d1-afef-34a4858c88dd.png",
    technologies: ["FPGA", "Verilog", "VHDL", "Digital Logic Design"],
    categories: ["embedded"],
    details: [
      "Designed and implemented a Traffic Light Controller using a state machine architecture on FPGA, ensuring reliable sequencing with well-defined timing constraints.",
      "Built an 8-digit LED Encoder capable of efficiently displaying multiplexed outputs, optimizing timing and resource utilization on FPGA fabric.",
      "Developed projects using Verilog/VHDL with simulation and synthesis, validating designs through testbenches and FPGA board deployment.",
      "Gained experience with finite state machines (FSMs), timing analysis, and hardware description languages, strengthening understanding of digital logic design.",
      "Established a foundation for scaling designs toward complex FPGA-based systems, including signal processing, communication protocols, and embedded controllers."
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
    description: "Designed, developed, and optimized hardware-software systems, integrating microcontrollers, sensors, and communication protocols for embedded applications",
    highlights: [
      "Contributed to the redesign of the Battery Management System (BMS) Controller to improve reliability and performance.",
      "Developed Battery Passports enabling efficient communication with the ECU over SPI protocol.",
      "Designed and implemented indicator light systems for charging and discharging states.",
      "Collaborated with the firmware and hardware teams to ensure seamless integration and testing of new features."
    ]
  },
  {
    company: "Accelerated Systems Inc",
    role: "PCB Hardware Designer",
    duration: "September 2023 - December 2023",
    location: "Waterloo, Ontario",
    description: "Conducted research on novel sensor fusion techniques and their application in autonomous systems.",
    highlights: [
      "Designed and validated multi-layer PCBs for motor control applications, including a buck/boost converter and gyrostabilizer circuits.",
      "Conducted analog circuit simulations using LTspice and MATLAB Simulink to optimize performance.",
      "Collaborated with firmware engineers to ensure seamless hardware-software integration.",
      "Performed hardware testing and debugging to improve reliability and efficiency of power systems."
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
