"use client";

import ImageGalleryLoadingSkeleton from "@/components/loading/ImageGalleryLoadingSkeleton";
import Container from "@/components/shared/Container";
import { useGetAllPost } from "@/hooks/post.hook";
import { IPost } from "@/types";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GalleryPage = () => {
  const { data, isLoading, isError } = useGetAllPost();
  const [imageData, setImageData] = useState({ img: "", i: 0 });

  const galleryImages = data?.data?.flatMap(
    (item: IPost) => item?.images || []
  );

  if (isLoading)
    return (
      <Container>
        <ImageGalleryLoadingSkeleton />
      </Container>
    );
  if (isError) return <Container>Error loading posts.</Container>;

  const viewImage = (img: string, i: number) => {
    setImageData({ img, i });
  };

  const imageAction = (action: string) => {
    const i = imageData?.i;

    if (action === "next-image") {
      setImageData({ img: galleryImages[i + 1], i: i + 1 });
    }

    if (action === "prev-image") {
      setImageData({ img: galleryImages[i - 1], i: i - 1 });
    }

    if (action === "close") {
      setImageData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {imageData.img && (
        <div className="fixed top-[68px] lg:top-[80px] left-0 w-full h-[calc(100vh-68px)] lg:h-[calc(100vh-80px)] bg-muted dark:bg-[#121212] flex items-center justify-center gap-4">
          <button
            onClick={() => imageAction("close")}
            className="absolute top-5 right-10 h-10 w-10 bg-accent flex items-center justify-center rounded-md cursor-pointer border dark:hover:bg-[#181818] hover:bg-[#1b1d1b22] "
          >
            <X />
          </button>
          <button
            onClick={() => imageAction("prev-image")}
            className="h-10 w-10 bg-accent flex items-center justify-center rounded-md cursor-pointer border dark:hover:bg-[#181818] hover:bg-[#1b1d1b22]"
          >
            <ChevronLeft />
          </button>
          <Image
            src={imageData?.img}
            alt="Galley Image"
            className="w-auto max-w-[90%] max-h-[90%]"
            width={900}
            height={700}
          />
          <button
            onClick={() => imageAction("next-image")}
            className="h-10 w-10 bg-accent flex items-center justify-center rounded-md cursor-pointer border dark:hover:bg-[#181818] hover:bg-[#1b1d1b22]"
          >
            <ChevronRight />
          </button>
        </div>
      )}
      <div className="pb-10">
        <Container>
          <div className="py-3 lg:py-5 mb-5 text-center ">
            <h2
              className={`text-[28px] lg:text-[40px] font-bold text-primary `}
            >
              Inspirations Gallery
            </h2>
            <p className="text-center text-base font-normal text-gray-700 dark:text-gray-300">
              Explore vibrant images showcasing our gardening projects and tips
              in action.
            </p>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="15px">
              {galleryImages.map((image: string, i: number) => (
                <Image
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  alt=""
                  onClick={() => viewImage(image, i)}
                  width={500}
                  height={500}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </div>
    </>
  );
};

export default GalleryPage;
