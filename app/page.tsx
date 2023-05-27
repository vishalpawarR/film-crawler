import Head from "next/head";
import MovieSearch from "./components/MovieSearch";


export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Film🎥 Crawler🕷️</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Film Crawler is a powerful movie search app that lets you effortlessly explore and discover a vast collection of films. With its intuitive interface and advanced crawling capabilities, Film Crawler brings you a seamless movie browsing experience. Find your favorite movies, explore new releases, and uncover hidden gems with ease. Get ready to embark on an exciting cinematic journey with Film Crawler." />
      </Head>

      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-8 text-white">Film🎥 Crawler🕷️</h1>
          <MovieSearch />
        </main>
    </div>
  )
}
