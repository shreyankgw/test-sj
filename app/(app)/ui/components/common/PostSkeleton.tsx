import React from 'react';

const PostSkeleton = () => {
  return (
    <main className="animate-pulse flex flex-col min-h-screen lg:max-w-7xl xl:max-w-screen-2xl mx-auto p-6 lg:px-8">
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
      <header className="border-b border-zinc-200 pb-8">
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
      </header>
      <article className="flex lg:flex-row flex-col">
        <div className="flex-1 space-y-6 py-4">
          <div className="h-40 bg-gray-300 rounded w-full"></div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-6 bg-gray-300 rounded col-span-2"></div>
              <div className="h-6 bg-gray-300 rounded col-span-1"></div>
            </div>
          </div>
        </div>
        <aside className="w-1/4 py-10 lg:px-6 px-0 flex flex-col gap-y-8">
          <div className="space-y-4">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="flex items-center gap-x-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/5"></div>
              <div className="h-6 bg-gray-300 rounded w-1/6"></div>
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
};

export default PostSkeleton;
