import React from "react";

const PostLoadingSkeleton = () => {
  return (
    <>
      <div className="border p-5 mb-5 bg-white dark:bg-accent animate-pulse">
        {/* PROFILE INFO (Skeleton) */}
        <div className="flex items-center gap-4">
          {/* Avatar Skeleton */}
          <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="flex flex-col gap-1">
            {/* Name Skeleton */}
            <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            {/* Time Ago Skeleton */}
            <div className="w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* POST INFO (Skeleton) */}
        <div className="my-6">
          {/* Title Skeleton */}
          <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          {/* Content Skeleton */}
          <div className="mt-2 space-y-2">
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* IMAGE GALLERY (Skeleton) */}
        <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* TOTAL LIKE AND COMMENT INFO (Skeleton) */}
        <div className="py-3 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* ACTION BUTTONS (Skeleton) */}
        <div className="pt-5 flex items-center justify-between">
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
      <div className="border p-5 mb-5 bg-white dark:bg-accent animate-pulse">
        {/* PROFILE INFO (Skeleton) */}
        <div className="flex items-center gap-4">
          {/* Avatar Skeleton */}
          <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="flex flex-col gap-1">
            {/* Name Skeleton */}
            <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            {/* Time Ago Skeleton */}
            <div className="w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* POST INFO (Skeleton) */}
        <div className="my-6">
          {/* Title Skeleton */}
          <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          {/* Content Skeleton */}
          <div className="mt-2 space-y-2">
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* IMAGE GALLERY (Skeleton) */}
        <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* TOTAL LIKE AND COMMENT INFO (Skeleton) */}
        <div className="py-3 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* ACTION BUTTONS (Skeleton) */}
        <div className="pt-5 flex items-center justify-between">
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default PostLoadingSkeleton;
