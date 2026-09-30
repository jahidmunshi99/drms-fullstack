const TableFooter = ({ orders }) => {
  return (
    <div className="p-3 flex justify-between items-center text-sm text-gray-600 dark:bg-stale-900 dark:text-slate-300 flex-wrap">
      <span>
        Showing {orders.length} to {orders.length} of 0 entries
      </span>
      <div className="flex space-x-2 mt-2 sm:mt-0">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:dark:bg-[#252423] dark:border-slate-500 dark:text-slate-300 hover:bg-gray-200 transition-colors cursor-pointer">
          Previous
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 dark:border-slate-500 hover:dark:bg-[#252423] dark:text-slate-300 hover:bg-gray-200 transition-colors cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
