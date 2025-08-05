import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { ComicCovers } from "@/components/comic-covers"
import { CharacterDesigns } from "@/components/character-designs"
import { ConceptArt } from "@/components/concept-art"
import { InteractiveGallery } from "@/components/interactive-gallery"
import { BlogSection } from "@/components/blog-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-50 dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ComicCovers />
        <CharacterDesigns />
        <ConceptArt />
        <InteractiveGallery />
        <BlogSection />
      </main>
      <SiteFooter />
    </div>
  )
}
