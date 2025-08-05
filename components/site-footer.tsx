import Link from "next/link"
import { BookText } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900 text-gray-400">
      <Link href="#" className="flex items-center justify-center gap-2">
        <BookText className="h-5 w-5 text-primary" />
        <span className="font-semibold">ComicVerse</span>
      </Link>
      <p className="text-xs sm:ml-auto">&copy; {new Date().getFullYear()} ComicVerse. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
    </footer>
  )
}
