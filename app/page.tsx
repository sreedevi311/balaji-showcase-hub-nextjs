import { HeroCarousel } from '@/components/HeroCarousel'
import { RatingsAndReviews } from '@/components/RatingsAndReviews'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <RatingsAndReviews />
    </main>
  )
}