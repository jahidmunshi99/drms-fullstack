import Icons from "./Icons"; // Assuming this is your local Icons file

const SuccessModal = ({ close = false, btnAction = false }) => {
  return (
    <div className="fixed w-full h-screen flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      {/* 2. Modal Container */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-100 rounded-3xl dark:border dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.6)] overflow-hidden relative transition-colors duration-300">
        {/* Close Button (Top Right) */}
        {close && (
          <button
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200 transition-colors bg-transparent border-none cursor-pointer p-1"
            aria-label="Close"
          >
            <Icons.Close className="" size={20} />
          </button>
        )}
        {/* Content Section */}
        <div className="py-14 px-8 flex flex-col items-center text-center">
          {/* Illustration/Icon */}
          <div className="mb-6 relative flex justify-center items-center h-22.5 w-full">
            <Icons.CheckMark className="text-green-400" size={100} />
          </div>

          {/* Text Content */}
          <h1 className="text-[32px] font-bold text-[#0f172a] dark:text-white tracking-wide mb-2 transition-colors duration-300">
            Successful
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-[15px] font-medium tracking-wide transition-colors duration-300">
            You have approved claim.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#a8dfb5] dark:bg-slate-800 transition-colors duration-300"></div>

        {/* Action Button Section */}
        {btnAction && (
          <div className="px-8 py-7 flex justify-center">
            <button className="bg-[#05DE72] hover:bg-[#04b85f] text-white text-[13px] font-medium tracking-[0.08em] px-8 py-3.5 rounded-full transition-colors duration-300 w-full max-w-[280px]">
              GO TO NEXT APPROVAL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessModal;
