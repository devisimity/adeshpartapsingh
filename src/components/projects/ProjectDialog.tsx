
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

interface ProjectDialogProps {
  project: ProjectDetails | null;
  open: boolean;
  onClose: () => void;
}

const ProjectDialog = ({ project, open, onClose }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6">
          {/* Project Image */}
          <div className="relative">
            <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </AspectRatio>
          </div>

          {/* Categories and Technologies */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Categories:</h4>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="font-normal">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold mb-2">Description:</h4>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>

          {/* All Key Features */}
          <div>
            <h4 className="font-semibold mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {project.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-techblue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Date */}
          <div className="text-right">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Completed: {project.date}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
