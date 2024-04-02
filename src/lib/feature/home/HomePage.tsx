import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const HomePage = () => {
  return (
    <>
      <div className="bg-[url('/kooka-krumb.jpeg')] min-h-96 bg-fixed bg-center bg-repeat bg-cover flex flex-col justify-center items-center gap-4 text-center">
        <p className="text-2xl md:text-6xl font-semibold text-white">
          WELCOME TO LYNCH’S GOURMET
        </p>
        <p className="text-2xl md:text-6xl font-semibold text-white">
          {" "}
          BREADCRUMBS
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src="/story.jpeg"
            alt="story"
            width="500"
            height="200"
            className="h-96 w-full object-cover"
          />
          <p className="text-2xl font-semibold">OUR STORY</p>
          <p className="text-center">
            KooKaKrumb Seasoned Breadcrumbs is proudly, an Australian run family
            business, that produces premium quality breadcrumb coatings for
            food, within Australian and International markets. It started off as
            a small business which I was going to pass over to my wife once it
            got started, however it just got more and more busy and I chose to
            keep working with it. Now we are a nation wide product and have
            grown so much in the past 20 years! Click the link below to read
            more about our story.
          </p>
          <Button variant="outline">Learn more</Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <Carousel className="w-1/2">
            <CarouselContent>
              {[1, 2, 3, 4, 5, 6]?.map((item) => (
                <CarouselItem key={item}>
                  {" "}
                  <Image
                    className="w-600 h-600"
                    src={`/breadcrumb/breadcrumb${item}.jpg`}
                    alt="breadcrumb1"
                    width="600"
                    height="600"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-2xl font-semibold">OUR BREADCRUMBS</p>
          <p className="text-center">
            We have a range of 13 different flavours which each can be used on
            their own or combined with others to create a culinary delight.
            Click on the button below to find all about our range and what they
            are made of.
          </p>
          <Button variant="outline">View our range</Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
