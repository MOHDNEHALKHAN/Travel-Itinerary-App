import { useState } from "react"
import { useNavigate } from "react-router"

function Onboarding() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState("")
  const [duration, setDuration] = useState("")
  const [groupType, setGroupType] = useState("Solo")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ideally, save this data globally
    navigate('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Plan Your Personalized Journey</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />

        <input
          type="number"
          placeholder="Trip Duration (days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />

        <select
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option>Solo</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Friends</option>
        </select>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
          Continue
        </button>
      </form>
    </div>
  )
}

export default Onboarding
