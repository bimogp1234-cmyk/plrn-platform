const DashboardCard = ({ icon, title, value, percentage, iconBgColor }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col">
    <div className="flex justify-between items-start">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md -mt-8 mb-4 ${iconBgColor}`}
      >
        {icon}
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500 capitalize">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div>
    <hr className="my-3 border-gray-200" />
    <p className="text-sm text-gray-500">
      <span className="text-green-500 font-bold">{percentage}</span> منذ الأمس
    </p>
  </div>
);
export default DashboardCard;
