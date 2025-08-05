import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  imageUrl: string
}

export default function BlogPostCard({ title, description, date, imageUrl }: BlogPostCardProps) {
  return (
    <Card className="w-full bg-gray-900 text-white border-gray-800 hover:border-primary transition-colors">
      <CardHeader className="p-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={350}
          height={200}
          className="rounded-t-lg object-cover w-full aspect-video"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold line-clamp-2">{title}</CardTitle>
        <p className="text-sm text-gray-400 mt-2 line-clamp-3">{description}</p>
        <p className="text-xs text-gray-500 mt-3">{date}</p>
        <Link href="#" className="text-primary text-sm mt-3 inline-block hover:underline">
          Read More
        </Link>
      </CardContent>
    </Card>
  )
}
