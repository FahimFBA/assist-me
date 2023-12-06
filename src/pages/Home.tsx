import { Button } from "@/components/ui/button";
import { Bookmark, SearchIcon, ShareIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Learn how to use our App
            </h1>
            <p className="text-gray-500 mt-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our comprehensive guide helps you get started with our mobile
              application in no time.
            </p>
            <Button className="mt-4" variant="secondary">
              Get Started
            </Button>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <SearchIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Easy Search</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Easily search for the documents you need.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Bookmark className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Bookmark</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Bookmark documents for easy access later.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <ShareIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Share</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Share documents with your team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Getting Started
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
              To get started with our documentation, simply click on the "Docs"
              link in the navigation menu. You can search for specific topics or
              browse through the categories.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
