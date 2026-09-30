const SectionTitle = ({ number, icon, title, noMargin = false }) => {
  return (
    <div className={`${noMargin ? "" : "mb-4"} flex items-center gap-3`}>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0ebff] dark:bg-[#2b2050] text-[#5b2bd9] dark:text-[#bba8ff]">
        {icon}
      </div>

      <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-[15px]">
        {number} {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
