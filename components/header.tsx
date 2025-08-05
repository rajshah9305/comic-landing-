import Link from "next/link"
import { BookOpen, Palette, Users, Newspaper } from "lucide-react"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-950 text-white border-b border-gray-800">
      <Link href="#" className="flex items-center justify-center gap-2">
        <BookOpen className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">ComicVerse</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#covers" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
          <BookOpen className="h-4 w-4" />
          Covers
        </Link>
        <Link
          href="#characters"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
        >
          <Users className="h-4 w-4" />
          Characters
        </Link>
        <Link
          href="#concept-art"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
        >
          <Palette className="h-4 w-4" />
          Concept Art
        </Link>
        <Link
          href="#gallery"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
        >
          <Palette className="h-4 w-4" />
          Gallery
        </Link>
        <Link href="#blog" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
          <Newspaper className="h-4 w-4" />
          Blog
        </Link>
      </nav>
    </header>
  )
}
