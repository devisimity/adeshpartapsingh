
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import { projectsData, categories } from "@/data/projectsData";

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

const ProjectsTab = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeCategory));

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
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
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={handleProjectClick}
          />
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

      {/* Project Dialog */}
      <ProjectDialog 
        project={selectedProject}
        open={dialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default ProjectsTab;
