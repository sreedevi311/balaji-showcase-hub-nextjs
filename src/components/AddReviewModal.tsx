import { useState } from "react";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const availableTags = [
  "Quality Product",
  "Fast Delivery",
  "Good Service",
  "Trusted Seller",
  "Fair Pricing",
  "Expert Advice",
  "Professional",
  "Reliable",
  "Good Stock",
];

const AddReviewModal = ({ isOpen, onClose }: AddReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (!title.trim() || !review.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success("Review submitted successfully!");
    onClose();
    // Reset form
    setRating(0);
    setTitle("");
    setReview("");
    setSelectedTags([]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-[0_10px_40px_-10px_hsl(220_15%_20%_/_0.2)] animate-scale-in">
        <div className="sticky top-0 bg-primary p-6 rounded-t-3xl flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-primary-foreground">Write Your Review</h2>
          <button
            onClick={onClose}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Rating *
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoverRating || rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Review Title *
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Summarize your experience"
              className="bg-background"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Add Tags (optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Review *
            </label>
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience with Balaji Traders..."
              className="bg-background min-h-[150px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold rounded-xl"
          >
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;
