function ThirdPane({ onClose }) {
    return (
      <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-6 overflow-y-auto z-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recommendations</h3>
          <button onClick={onClose} className="text-red-500 text-lg">X</button>
        </div>
  
        <ul className="space-y-4">
          <li className="border p-3 rounded-md">Eiffel Tower Visit</li>
          <li className="border p-3 rounded-md">Seine River Cruise</li>
          <li className="border p-3 rounded-md">Louvre Museum Tour</li>
        </ul>
      </div>
    )
  }
  
  export default ThirdPane
  
  