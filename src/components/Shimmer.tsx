const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10">
      {Array(6).fill("").map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-white shadow rounded-lg overflow-hidden"
        >
          {/* Image placeholder */}
          <div className="h-40 bg-gray-300"></div>
          
          {/* Content placeholders */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
