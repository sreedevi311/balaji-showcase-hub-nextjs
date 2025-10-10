import { useState, useEffect } from "react";
import { Phone, MapPin, Calendar, Award } from "lucide-react";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import store3 from "@/assets/store-3.jpg";

const slides = [
  {
    title: "Quality Cement & Construction Materials",
    subtitle: "Your Trusted Partner Since 1994",
    description: "Premium products for residential and commercial projects",
    image: store1,
  },
  {
    title: "Complete Range of Building Supplies",
    subtitle: "Cements • Wall Putty • Concrete • OPC",
    description: "Everything you need for your construction projects",
    image: store2,
  },
  {
    title: "31 Years of Excellence",
    subtitle: "Verified Dealer • GSTIN Registered",
    description: "Building trust with quality and reliability",
    image: store3,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Image Background with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(197_71%_85%_/_0.85)] via-[hsl(197_71%_85%_/_0.75)] to-white/95" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8 absolute"
                  }`}
                >
                  <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <p className="text-sm font-semibold text-primary">Verified Business ✓</p>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-primary/80 font-semibold mb-3">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-foreground/70 mb-6">
                    {slide.description}
                  </p>
                </div>
              ))}

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card/70 backdrop-blur-md rounded-2xl p-5 shadow-[0_4px_30px_-8px_hsl(220_15%_20%_/_0.12)]">
                  <Calendar className="w-6 h-6 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">31 Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
                <div className="bg-card/70 backdrop-blur-md rounded-2xl p-5 shadow-[0_4px_30px_-8px_hsl(220_15%_20%_/_0.12)]">
                  <Award className="w-6 h-6 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">4.4 ★</p>
                  <p className="text-sm text-muted-foreground">19 Reviews</p>
                </div>
              </div>
            </div>

            {/* Right Info Card */}
            <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_40px_-10px_hsl(220_15%_20%_/_0.2)]">
              <h2 className="text-2xl font-bold text-foreground mb-6">Business Information</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">
                      House No 1-296/1&2, Bhavani Center<br />
                      BVK Balaji Traders, NRT Road<br />
                      Addanki-523201, Prakasam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Contact</p>
                    <p className="text-sm text-muted-foreground">Click to view phone number</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">GSTIN</p>
                      <p className="text-sm font-semibold text-foreground">Registered ✓</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Payment</p>
                      <p className="text-sm font-semibold text-foreground">All Methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroCarousel;
