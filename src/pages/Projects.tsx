
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import ProjectsTab from "@/components/projects/ProjectsTab";
import ExperienceTab from "@/components/projects/ExperienceTab";

const ProjectsPage = () => {
  const [selectedTab, setSelectedTab] = useState("projects");

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
              <ProjectsTab />
            </TabsContent>
            
            <TabsContent value="experience">
              <ExperienceTab />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
