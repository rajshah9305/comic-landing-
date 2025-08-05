import Link from "next/link"
import { BookText, Brush, Layers, Rss, GalleryHorizontal } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-gray-900">
      <Link href="#" className="flex items-center justify-center gap-2">
        <BookText className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold tracking-tight">ComicVerse</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#covers" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
          <BookText className="h-4 w-4" /> Covers
        </Link>
        <Link
          href="#characters"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
        >
          <Brush className="h-4 w-4" /> Characters
        </Link>
        <Link
          href="#concept-art"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
        >
          <Layers className="h-4 w-4" /> Concept Art
        </Link>
        <Link
          href="#gallery"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
        >
          <GalleryHorizontal className="h-4 w-4" /> Gallery
        </Link>
        <Link href="#blog" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
          <Rss className="h-4 w-4" /> Blog
        </Link>
      </nav>
    </header>
  )
}
