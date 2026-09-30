const Input = ({
  label,
  required,
  placeholder,
  value,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-medium text-gray-800 dark:text-slate-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="text"
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        className="h-9 w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 text-sm text-gray-700 dark:text-slate-200 outline-none transition placeholder:text-gray-400 dark:placeholder:text-slate-500 hover:border-gray-400 dark:hover:border-slate-500 focus:border-[#7040df] focus:ring-2 focus:ring-[#7040df]/10"
        {...props}
      />
    </div>
  );
};

export default Input;
