import apple from "../../assets/apple.png";

const AppStoreButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Apple App Store Button */}
      <a
        href="#"
        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors"
      >

        <img src={apple} className="w-8 h-8" alt="Apple logo" />
        <div className="flex flex-col items-start">
          <span className="text-xs">Download on the</span>
          <span className="text-lg font-semibold -mt-1">App Store</span>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="#"
        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors"
      >
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"
            fill="#00D7FE"
          />
          <path
            d="M13.792 12l3.462 3.462-11.03 6.35a1.007 1.007 0 01-.614.188L13.792 12z"
            fill="#FFCE00"
          />
          <path
            d="M17.254 8.538L13.792 12l3.462 3.462 2.857-1.644a1 1 0 000-1.636l-2.857-1.644z"
            fill="#FF003E"
          />
          <path
            d="M13.792 12L5.61 3.814a1.007 1.007 0 01.614-.188l11.03 6.35L13.792 12z"
            fill="#00F076"
          />
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-xs">GET IT ON</span>
          <span className="text-lg font-semibold -mt-1">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;