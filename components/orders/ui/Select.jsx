import Icons from "../../ui/Icons";

const Select = ({
  label,
  options = [],
  placeholder = "Select",
  dot,
  ...props
}) => {
  const { ArrowDown } = Icons;

  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-xs font-medium text-gray-800 dark:text-slate-300">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          {...props}
          className="h-9 w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-9 text-sm text-gray-700 outline-none transition hover:border-gray-400 focus:border-[#7040df] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500 capitalize"
        >
          <option value="">{placeholder}</option>

          {options.map((item, index) => {
            const optionValue = typeof item === "object" ? item.name : item;
            const optionLabel = typeof item === "object" ? item.name : item;
            return (
              <option key={index} value={optionValue} className="capitalize">
                {optionLabel}
              </option>
            );
          })}
        </select>

        <ArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-slate-400" />
      </div>
    </div>
  );
};

export default Select;
