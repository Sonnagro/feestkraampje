
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Confetti from "./Confetti";

interface LayoutProps {
  children: ReactNode;
  showConfetti?: boolean;
}

const Layout = ({ children, showConfetti = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showConfetti && <Confetti />}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
