
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  onClick: (project: ProjectDetails) => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const cleanTitle = (title: string) => {
    return title.replace(/\s*–\s*Personal Project/gi, '').trim();
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="tech-card group overflow-hidden cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <Badge key={cat} variant="secondary" className="font-normal">
              {cat}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{cleanTitle(project.title)}</h3>
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
          {project.details.length > 2 && (
            <p className="text-xs text-techblue mt-2">Click to see all features...</p>
          )}
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
