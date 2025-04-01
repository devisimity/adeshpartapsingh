import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Learn more about me and my journey" />
      </Helmet>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="text-muted-foreground mb-4">
                I am a passionate developer with a love for creating beautiful and functional web applications.
                My journey in tech started with a curiosity about how things work, which evolved into a
                career in software development.
              </p>
              <p className="text-muted-foreground mb-4">
                I specialize in modern web technologies and am constantly learning new tools and frameworks
                to stay at the forefront of web development.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Frontend Development (React, TypeScript, Tailwind CSS)</li>
                <li>• Backend Development (Node.js, Express)</li>
                <li>• Database Management (SQL, MongoDB)</li>
                <li>• UI/UX Design</li>
                <li>• Performance Optimization</li>
                <li>• Responsive Web Design</li>
              </ul>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Interests & Hobbies</h2>
              <p className="text-muted-foreground mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through blog posts and tutorials. I'm also passionate about
                mentoring and helping others learn programming.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/projects">View My Projects</Link>
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AboutPage; 