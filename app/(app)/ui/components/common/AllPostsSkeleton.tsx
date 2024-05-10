import React from 'react';

const AllPostsSkeleton = () => {
  return (
    <section className="px-6 lg:px-8 animate-pulse">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index}
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5">
            <div className="aspect-w-16 aspect-h-11 bg-gray-300 rounded-xl"></div>
            <div className="my-6">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3 mt-2"></div>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <div className="h-4 bg-gray-300 rounded w-32 mb-1"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllPostsSkeleton;
