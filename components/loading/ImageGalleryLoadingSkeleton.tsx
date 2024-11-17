import React from "react";

const ImageGalleryLoadingSkeleton = ({ items = 12 }) => {
  return (
    <div className="py-10 space-y-10">
      {/* Header Section */}
      <div className="flex items-center flex-col gap-3 mb-10">
        <div className="w-1/2 h-10 bg-gray-300 dark:bg-dark-700 animate-pulse rounded-md mb-3"></div>
        <div className="w-3/4 h-6 bg-gray-300 dark:bg-dark-700 animate-pulse rounded-md"></div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: items }).map((_, index) => (
          <div
            key={index}
            className="w-full h-40 sm:h-48 md:h-56 bg-gray-300 dark:bg-dark-700 animate-pulse rounded-xl shadow-md hover:shadow-lg "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryLoadingSkeleton;
