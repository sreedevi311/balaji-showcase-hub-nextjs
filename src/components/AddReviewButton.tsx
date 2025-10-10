import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

interface AddReviewButtonProps {
  onClick: () => void;
}

const AddReviewButton = ({ onClick }: AddReviewButtonProps) => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Share Your Experience
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          Your feedback helps us serve you better
        </p>
        <Button
          onClick={onClick}
          size="lg"
          className="bg-card text-primary hover:bg-card/90 gap-2 rounded-full px-8 py-6 text-lg font-semibold shadow-[0_10px_40px_-10px_hsl(220_15%_20%_/_0.2)] hover:scale-105 transition-transform duration-300"
        >
          <PenSquare className="w-5 h-5" />
          Write a Review
        </Button>
      </div>
    </section>
  );
};

export default AddReviewButton;
