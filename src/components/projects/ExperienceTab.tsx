
import ExperienceItem from "./ExperienceItem";
import { experiencesData } from "@/data/projectsData";

const ExperienceTab = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {experiencesData.map((exp, index) => (
        <ExperienceItem 
          key={index} 
          experience={exp} 
          index={index} 
          isLast={index === experiencesData.length - 1} 
        />
      ))}
    </div>
  );
};

export default ExperienceTab;
