export default function Topbar() {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-bold text-gray-900">Dobby’s Café</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
