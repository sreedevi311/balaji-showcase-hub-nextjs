import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-300 rounded-full flex justify-between items-center px-6 py-3 ${
            isScrolled
              ? "bg-card/95 backdrop-blur-md shadow-[0_4px_30px_-8px_hsl(220_15%_20%_/_0.12)]"
              : "bg-card/80 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              BT
            </div>
            <div>
              <h1 className="font-bold text-base text-foreground">Balaji Traders</h1>
              <p className="text-xs text-muted-foreground">Since 1994</p>
            </div>
          </div>

          <Button
            onClick={onLoginClick}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
