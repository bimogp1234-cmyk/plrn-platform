const SidebarLink = ({ icon, text, active }) => (
  <a
    href="#"
    className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
      active
        ? "bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-200"
    }`}
  >
    <div className={`p-2 rounded-lg ${active ? "bg-white" : "bg-gray-100"}`}>
      <span className={active ? "text-blue-500" : "text-gray-600"}>{icon}</span>
    </div>
    <span className="mr-4">{text}</span>
  </a>
);
export default SidebarLink;
