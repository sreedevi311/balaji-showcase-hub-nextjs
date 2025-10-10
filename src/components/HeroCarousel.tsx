import { useState, useEffect } from "react";
import { Star, Award, MapPin, Calendar } from "lucide-react";

const slides = [
  {
    title: "Quality Cement & Construction Materials",
    subtitle: "Your Trusted Partner Since 1994",
    stats: [
      { icon: Star, label: "4.4 Rating", value: "19 Reviews" },
      { icon: Award, label: "31 Years", value: "Experience" },
    ],
  },
  {
    title: "Premium Products for Every Project",
    subtitle: "Cements • Wall Putty • Concrete • OPC",
    stats: [
      { icon: MapPin, label: "Location", value: "Addanki, Prakasam" },
      { icon: Calendar, label: "Est.", value: "1994" },
    ],
  },
  {
    title: "Building Trust, One Project at a Time",
    subtitle: "Verified Dealer • Quality Assured",
    stats: [
      { icon: Star, label: "Verified", value: "Business" },
      { icon: Award, label: "GSTIN", value: "Registered" },
    ],
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(197_71%_85%)] to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide
                  ? direction === "right"
                    ? "animate-slide-in-right"
                    : "animate-slide-in-left"
                  : "hidden"
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {slide.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-card/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_30px_-8px_hsl(220_15%_20%_/_0.12)] hover:shadow-[0_10px_40px_-10px_hsl(220_15%_20%_/_0.2)] transition-all duration-300 hover:scale-105"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-12 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom blur effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroCarousel;
