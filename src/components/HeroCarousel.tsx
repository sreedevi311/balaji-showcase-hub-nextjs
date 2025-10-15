import { useState, useEffect } from "react";
import { MapPin, Clock, ArrowRight, ChevronRight } from "lucide-react";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import store3 from "@/assets/store-3.jpg";

const slides = [
  {
    title: "Premium Construction Materials",
    subtitle: "Cements • Wall Putty • Concrete • OPC",
    image: store1,
    accent: "from-blue-600 to-cyan-500"
  },
  {
    title: "Complete Building Solutions",
    subtitle: "One Stop For All Your Needs",
    image: store2,
    accent: "from-indigo-600 to-blue-500"
  },
  {
    title: "Trusted by Thousands of Customers",
    subtitle: "Three Decades of Excellence",
    image: store3,
    accent: "from-sky-600 to-blue-600"
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pt-20 md:pt-7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Ambient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content (60% width) */}
          <div className="space-y-10">
            {/* Main Heading */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute top-0 left-0"
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                    <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl font-medium text-slate-600 tracking-wide">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Company Info Bar */}
            
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-1 h-14 rounded-full bg-gradient-to-b ${slides[currentSlide].accent} flex-shrink-0`} />
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-slate-900 mb-1">BVK Balaji Traders</h2>
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">House No 1-296/1&2, NRT Road, Addanki-523201</span>
                    </div>
                  </div>
                </div>
              </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="group cursor-pointer">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    31
                  </span>
                  <span className="text-slate-600 font-medium">Years</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Experience</p>
              </div>
              
              <div className="w-px h-12 bg-slate-200" />
              
              <div className="group cursor-pointer">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    4.4
                  </span>
                  <span className="text-slate-600 font-medium">★</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Customer Rating</p>
              </div>
              
              <div className="w-px h-12 bg-slate-200" />
              
              <div className="group cursor-pointer">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    19
                  </span>
                  <span className="text-slate-600 font-medium">Reviews</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Happy Clients</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-2">
              <button className="px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                View Reviews
              </button>
              <button className="px-6 py-3 border-2 border-slate-900 text-slate-900 font-medium hover:bg-slate-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column - Compact Image (40% width) */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Main Image Container */}
            <div className="relative h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-600 ease-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  {/* Image Frame */}
                  <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${slide.accent} opacity-10`} />
                  </div>

                  {/* Minimal Decorative Element */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${slide.accent} rounded-3xl opacity-10 blur-2xl`} />
                </div>
              ))}

              {/* Slide Indicators on Image */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="group relative"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-sky-400 scale-110 shadow-lg shadow-sky-400/50"
                        : "bg-white/30 backdrop-blur-sm group-hover:bg-sky-300/60 group-hover:scale-110"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroCarousel;