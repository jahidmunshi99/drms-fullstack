"use client";

export default function FormInput({ label, error, required, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">
        {label}

        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <input
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
          transition
          focus:border-blue-500
        "
      />

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
