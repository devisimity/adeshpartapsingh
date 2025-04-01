
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
              <TabsList className="relative flex w-full max-w-md overflow-hidden bg-transparent rounded-none border-0 p-0">
                <div className="absolute inset-0 bg-gradient-to-r from-techblue/20 to-techblue/40 rounded-xl overflow-hidden backdrop-blur-sm border border-techblue/30" />
                <div className="absolute bottom-0 h-[2px] w-1/2 bg-techblue transition-all duration-300" 
                  style={{ 
                    transform: selectedTab === "projects" ? "translateX(0)" : "translateX(100%)",
                  }} 
                />
                <TabsTrigger 
                  value="projects" 
                  className="z-10 relative flex-1 text-lg py-4 px-6 font-medium text-foreground rounded-l-xl backdrop-blur-md transition-all duration-300 data-[state=active]:text-techblue data-[state=active]:font-semibold"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu">
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                      <rect x="9" y="9" width="6" height="6"/>
                      <path d="M15 2v2"/>
                      <path d="M15 20v2"/>
                      <path d="M2 15h2"/>
                      <path d="M20 15h2"/>
                      <path d="M2 9h2"/>
                      <path d="M20 9h2"/>
                      <path d="M9 2v2"/>
                      <path d="M9 20v2"/>
                    </svg>
                    Projects
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="experience" 
                  className="z-10 relative flex-1 text-lg py-4 px-6 font-medium text-foreground rounded-r-xl backdrop-blur-md transition-all duration-300 data-[state=active]:text-techblue data-[state=active]:font-semibold"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
                      <rect width="20" height="14" x="2" y="7" rx="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                    Experience
                  </span>
                </TabsTrigger>
              </TabsList>
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
