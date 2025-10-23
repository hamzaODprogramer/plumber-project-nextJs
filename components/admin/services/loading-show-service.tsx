export default function LoadingSHowService() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-full p-5 bg-black/10 dark:bg-white/10">
        <div className="w-[45px] h-[45px] bg-gray-300 dark:bg-gray-600 animate-pulse rounded-full" />
      </div>
      
      <div className="h-7 bg-gray-300 dark:bg-gray-600 animate-pulse rounded w-48" />
      
      <div className="space-y-2 w-full px-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 animate-pulse rounded w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 animate-pulse rounded w-5/6 mx-auto" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 animate-pulse rounded w-3/4 mx-auto" />
      </div>
    </div>
  );
}