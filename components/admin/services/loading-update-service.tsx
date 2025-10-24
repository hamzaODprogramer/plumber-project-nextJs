import React from 'react';

const ServiceUpdateSkeleton: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="grid flex-1 gap-2">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded-none" />
        </div>

        <div className="flex flex-col w-full justify-start pt-0 pb-2 gap-1">
          <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded-none" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
          <div className="h-24 w-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded-none" />
        </div>
      </div>
    </div>
  );
};

export default ServiceUpdateSkeleton;