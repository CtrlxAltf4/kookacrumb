import HomePage from "@/lib/feature/home/HomePage";
import Navbar from "@/lib/feature/shared/Navbar";
import StoryPage from "@/lib/feature/story/StoryPage";
import Image from "next/image";

export default function Story() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col p-2 md:px-8 md:py-4 gap-14 w-full max-w-screen-2xl">
        <Navbar />
        <StoryPage />
      </div>
    </main>
  );
}
