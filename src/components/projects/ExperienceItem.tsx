
import { motion } from "framer-motion";

interface ExperienceDetails {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
}

interface ExperienceItemProps {
  experience: ExperienceDetails;
  index: number;
  isLast: boolean;
}

const ExperienceItem = ({ experience, index, isLast }: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 mb-12 last:mb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-techblue flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
      
      <div className="tech-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
          <h4 className="text-lg font-medium text-techblue">{experience.company}</h4>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {experience.location}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {experience.description}
        </p>
        
        <h5 className="font-semibold mb-2">Key Achievements:</h5>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
          {experience.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
