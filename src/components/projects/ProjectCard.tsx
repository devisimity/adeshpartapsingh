
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  details: string[];
  date: string;
}

interface ProjectCardProps {
  project: ProjectDetails;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
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
  );
};

export default ProjectCard;
