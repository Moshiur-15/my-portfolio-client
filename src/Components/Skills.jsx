export default function Skills() {
  return (
    <div className="py-16 px-4 lg:px-0">
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Frontend Skills */}
        <div className="bg-blue-50 shadow-lg p-6 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all duration-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Frontend
          </h3>
          <ul className="space-y-2 text-lg text-gray-600">
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- Tailwind CSS</li>
            <li>- JavaScript</li>
            <li>- React</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="bg-blue-50 shadow-lg p-6 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all duration-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Backend</h3>
          <ul className="space-y-2 text-lg text-gray-600">
            <li>- MongoDB (intermediate)</li>
            <li>- Node.js (intermediate)</li>
            <li>- Express.js (intermediate)</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="bg-blue-50 shadow-lg p-6 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all duration-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Others</h3>
          <ul className="space-y-2 text-lg text-gray-600">
            <li>- Firebase</li>
            <li>- Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
