import { useState, useEffect, useRef } from "react";
import { Star, ThumbsUp, ThumbsDown, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  title: string;
  tags: string[];
  review: string;
  likes: number;
  dislikes: number;
}

const mockReviews: Review[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatar: "RK",
    date: "March 15, 2025",
    rating: 5,
    title: "Excellent Quality Cement",
    tags: ["Quality Product", "Fast Delivery", "Good Service"],
    review: "Purchased cement for my house construction. The quality is excellent and the delivery was on time. Staff is very helpful and professional. Highly recommended!",
    likes: 12,
    dislikes: 0,
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "PS",
    date: "March 10, 2025",
    rating: 5,
    title: "Best Dealer in Addanki",
    tags: ["Trusted Seller", "Fair Pricing", "Expert Advice"],
    review: "Been buying construction materials from Balaji Traders for years. They always provide the best quality products at fair prices. The team is knowledgeable and gives good advice.",
    likes: 8,
    dislikes: 1,
  },
  {
    id: 3,
    name: "Venkat Reddy",
    avatar: "VR",
    date: "March 5, 2025",
    rating: 4,
    title: "Good Products and Service",
    tags: ["Reliable", "Good Stock"],
    review: "Wide range of construction materials available. Good service and reasonable prices. Delivery could be slightly faster but overall satisfied with the purchase.",
    likes: 5,
    dislikes: 0,
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    avatar: "LD",
    date: "February 28, 2025",
    rating: 5,
    title: "Professional and Reliable",
    tags: ["Professional", "Quality Assured"],
    review: "Very professional dealer. The cement quality is top-notch. They helped me choose the right materials for my project. Will definitely buy again.",
    likes: 10,
    dislikes: 0,
  },
];

const filters = ["All", "5 Stars", "4 Stars", "Recent", "Most Helpful"];

const ReviewsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [visibleReviews, setVisibleReviews] = useState<Set<number>>(new Set());
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleReviews((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    reviewRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Customer Reviews
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full ${
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            {mockReviews.map((review, index) => (
              <div
                key={review.id}
                ref={(el) => { reviewRefs.current[index] = el; return undefined }}
                data-index={index}
                className={`bg-card rounded-2xl p-6 shadow-[0_2px_20px_-5px_hsl(220_15%_20%_/_0.08)] hover:shadow-[0_4px_30px_-8px_hsl(220_15%_20%_/_0.12)] transition-all duration-300 ${
                  visibleReviews.has(index) ? "animate-slide-up" : "opacity-0"
                }`}
              >
                {/* Row 1: Profile and Date */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">Verified Purchase</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>

                {/* Row 2: Rating and Title */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">{review.title}</h4>
                </div>

                {/* Row 3: Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Row 4: Review Text */}
                <p className="text-foreground mb-4 leading-relaxed">{review.review}</p>

                {/* Row 5: Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Helpful ({review.likes})</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">({review.dislikes})</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors ml-auto">
                    <Flag className="w-4 h-4" />
                    <span className="text-sm">Report</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
