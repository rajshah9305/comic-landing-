import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ComicCardProps {
  title: string
  description: string
  imageUrl: string
}

export default function ComicCard({ title, description, imageUrl }: ComicCardProps) {
  return (
    <Card className="w-full max-w-sm bg-gray-900 text-white border-gray-800 hover:border-primary transition-colors">
      <CardHeader className="p-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={400}
          className="rounded-t-lg object-cover w-full aspect-[3/4]"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">{/* Optional: Add a button or link here */}</CardFooter>
    </Card>
  )
}
