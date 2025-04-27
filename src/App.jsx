import { Routes, Route } from "react-router"
import Onboarding from "./pages/Onboarding"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
