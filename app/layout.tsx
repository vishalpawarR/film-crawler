import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["400","600"],
  subsets: ["latin"]
})

export const metadata = {
  title: 'Film🎥 Crawler🕷️',
  description: 'Film Crawler is a powerful movie search app that lets you effortlessly explore and discover a vast collection of films. With its intuitive interface and advanced crawling capabilities, Film Crawler brings you a seamless movie browsing experience. Find your favorite movies, explore new releases, and uncover hidden gems with ease. Get ready to embark on an exciting cinematic journey with Film Crawler.',
  keywords: [
    "Film Crawler",
    "movie search app",
    "film search",
    "movie discovery",
    "film exploration",
    "cinematic journey",
    "film recommendations",
    "movie browsing",
    "film collection",
    "new releases",
    "hidden gems",
    "movie search engine",
    "typescript",
    "React",
    "Next.js",
    "tailwind css",
    "Movie Finder",
    "movie database",
    "cinema search",
    "API integration",
    "responsive design",
    "user-friendly interface",
    "movie details",
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
