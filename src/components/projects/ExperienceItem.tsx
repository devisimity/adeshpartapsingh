
import { motion } from "framer-motion";

interface ExperienceDetails {
  company: string;
  role: string;
  duration: string;
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
        <h4 className="text-lg font-medium text-techblue mb-3">{experience.company}</h4>
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
