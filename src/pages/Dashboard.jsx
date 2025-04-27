import { useState } from "react"
import ThirdPane from "../components/ThirdPane"

function Dashboard() {
  const [showPane, setShowPane] = useState(false)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Trip Summary</h2>

      <div className="bg-white shadow-md p-4 rounded-lg mb-6">
        <p><strong>Destination:</strong> Paris</p>
        <p><strong>Duration:</strong> 5 Days</p>
        <p><strong>Group Type:</strong> Couple</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowPane(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Explore Recommendations
        </button>

        <button
          onClick={() => alert('Edit Itinerary clicked')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Edit Itinerary
        </button>
      </div>

      {showPane && <ThirdPane onClose={() => setShowPane(false)} />}
    </div>
  )
}

export default Dashboard
