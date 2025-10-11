export default function Loading() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-700 min-h-screen">
      {/* Page Title */}
      <div className="h-8 w-48 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-6"></div>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="h-6 w-40 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-28 bg-blue-200 dark:bg-blue-900 rounded animate-pulse"></div>
        </div>

        {/* Content Area - Generic blocks that work for everything */}
        <div className="p-6 space-y-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Icon/Avatar placeholder */}
              <div className="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded animate-pulse flex-shrink-0"></div>

              {/* Content placeholder */}
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Action buttons placeholder */}
              <div className="flex gap-2 flex-shrink-0">
                <div className="h-9 w-9 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="h-9 w-9 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="h-9 w-9 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
