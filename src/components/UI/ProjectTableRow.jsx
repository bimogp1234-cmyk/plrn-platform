const ProjectTableRow = ({ logo, name, members, budget, completion }) => (
  <tr>
    <td className="p-4">
      <div className="flex items-center">
        <img src={logo} alt={name} className="w-8 h-8" />
        <span className="font-bold text-sm text-gray-700 mr-4">{name}</span>
      </div>
    </td>
    <td className="p-4">
      <div className="flex -space-x-2 justify-center">
        {members.map((member, index) => (
          <img
            key={index}
            src={member}
            className="w-6 h-6 rounded-full border-2 border-white"
            alt="member"
          />
        ))}
      </div>
    </td>
    <td className="p-4 text-center">
      <span className="text-sm font-semibold text-gray-600">{budget}</span>
    </td>
    <td className="p-4">
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-blue-500 h-1.5 rounded-full"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
    </td>
  </tr>
);
export default ProjectTableRow;
