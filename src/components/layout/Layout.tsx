
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggle from "../theme/ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="fixed right-4 mt-16 z-40">
        <ThemeToggle />
      </div>
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
