const PopularPostLoadingSkeleton = () => {
  return (
    <div className="mt-3 animate-pulse">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="flex items-center gap-3 mt-2">
            <div className="w-[60px] h-[40px] bg-gray-300 dark:bg-gray-700 rounded-[10px]"></div>

            <div className="flex flex-col space-y-2">
              <div className="w-36 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PopularPostLoadingSkeleton;
