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
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-[0_2px_20px_-5px_hsl(220_15%_20%_/_0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            BT
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">Balaji Traders</h1>
            <p className="text-xs text-muted-foreground">Since 1994</p>
          </div>
        </div>

        <Button
          onClick={onLoginClick}
          variant="ghost"
          className="gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
        >
          <LogIn className="w-4 h-4" />
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
