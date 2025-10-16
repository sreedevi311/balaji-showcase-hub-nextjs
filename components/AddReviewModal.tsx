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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl border border-border">
        <div className="sticky top-0 bg-background p-4 flex justify-between items-center border-b border-border z-10">
          <h2 className="text-xl font-semibold text-foreground">Write Your Review</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Your Rating *
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-colors"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoverRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-none text-yellow-400 stroke-1"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Review Title *
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Summarize your experience"
              className="bg-background border-border focus:border-primary"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Add Tags (optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Your Review *
            </label>
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience with Balaji Traders..."
              className="bg-background border-border min-h-[120px] resize-none focus:border-primary"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;