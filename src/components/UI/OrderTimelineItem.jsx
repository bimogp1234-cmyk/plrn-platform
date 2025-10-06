const OrderTimelineItem = ({ icon, color, title, time, last }) => (
  <div className="flex gap-x-3">
    <div
      className={`relative ${
        last
          ? ""
          : "after:absolute after:top-8 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-1/2 after:bg-gray-200"
      }`}
    >
      <div className="relative z-10 w-8 h-8 flex justify-center items-center">
        <div
          className={`w-8 h-8 rounded-full flex justify-center items-center text-white ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
    <div className="grow pt-1 pb-8">
      <h3 className="flex gap-x-1.5 font-semibold text-gray-800 text-sm">
        {title}
      </h3>
      <p className="mt-1 text-xs text-gray-500">{time}</p>
    </div>
  </div>
);
export default OrderTimelineItem;
