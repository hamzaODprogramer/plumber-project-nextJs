export default function MessageClientSkeleton() {
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-3 flex flex-col gap-3 shadow-sm shadow-black/15 dark:shadow-white/15 animate-pulse">
      
      <div className="flex items-center gap-2">
       
        <div className="rounded-full w-10 h-10 bg-gray-300 dark:bg-gray-600" />
        
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24" />
        </div>
      </div>

      <div className="w-full bg-black/5 dark:bg-white/5 px-3 py-2 border-1 border-[#061f46]/20 dark:border-white/20 shadow-sm shadow-[#061f46]/10 dark:shadow-white space-y-2">
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full" />
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6" />
      </div>

      <div className="w-full h-20 mt-2 bg-black/5 dark:bg-white/5 px-3 py-2 border-gray-300 dark:border-gray-600 rounded" />

      <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
    </div>
  );
}