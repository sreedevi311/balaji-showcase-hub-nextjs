import { useState } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import RatingsOverview from "@/components/RatingsOverview";
import ReviewsSection from "@/components/ReviewsSection";
import AddReviewButton from "@/components/AddReviewButton";
import AddReviewModal from "@/components/AddReviewModal";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <HeroCarousel />
      <RatingsOverview />
      <ReviewsSection />
      <AddReviewButton onClick={() => setIsReviewOpen(true)} />
      
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <AddReviewModal isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
      
      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Balaji Traders. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            House No 1-296/1&2, Bhavani Center, BVK Balaji Traders, NRT Road, Addanki-523201
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
