"use client";

export default function FormSelect({
  label,
  options = [],
  required,
  error,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">
        {label}

        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <select
        {...props}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          px-4
          text-white
          outline-none
          focus:border-blue-500
        "
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
