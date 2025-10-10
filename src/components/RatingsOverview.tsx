import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ratingsData = [
  { stars: 5, count: 12, percentage: 63 },
  { stars: 4, count: 5, percentage: 26 },
  { stars: 3, count: 1, percentage: 5 },
  { stars: 2, count: 1, percentage: 5 },
  { stars: 1, count: 0, percentage: 0 },
];

const RatingsOverview = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-12 text-center">
            Customer Ratings & Reviews
          </h2>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-10px_hsl(220_15%_20%_/_0.2)]">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Average Rating */}
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold text-foreground mb-2">4.4</div>
                <div className="flex justify-center md:justify-start gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= 4
                          ? "fill-amber-400 text-amber-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">Based on 19 reviews</p>
              </div>

              {/* Rating Bars */}
              <div className="md:col-span-2 space-y-3">
                {ratingsData.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-16">
                      <span className="text-sm font-medium text-foreground">{rating.stars}</span>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <Progress
                      value={rating.percentage}
                      className="flex-1 h-3 bg-muted"
                    />
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsOverview;
