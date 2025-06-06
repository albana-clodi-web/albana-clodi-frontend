export default function SpinnerLoading() {
  return (
    <div className="flex items-center justify-center space-x-3">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-gray-600 dark:text-gray-300">Memuat data...</span>
    </div>
  );
}
