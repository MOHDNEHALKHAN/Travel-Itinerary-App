// src/pages/Dashboard.jsx

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UseTrip } from '../context/TripContext';

function Dashboard() {
  const { tripData, updateTripData } = UseTrip();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...tripData });

  useEffect(() => {
    if (!tripData.destination) {
      navigate('/onboarding');
    }
  }, [tripData, navigate]);

  const handleSave = () => {
    updateTripData(formData);
    setEditing(false);
  };

  if (!tripData.destination) {
    return null; // jab tak onboarding complete nahi hai, kuch mat dikhao
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hello {tripData.name || 'Traveler'}!</h1>
          <p className="text-gray-400 text-sm">Ready for the trip?</p>
        </div>
        <div className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-full font-bold">
          {tripData.name ? tripData.name.charAt(0) : 'T'}
        </div>
      </div>

      {/* Upcoming Trip */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Your Upcoming Trip</h2>
          <button 
            onClick={() => setEditing(!editing)}
            className="text-sm bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {/* Trip Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80"
            alt="Destination"
            className="w-full h-48 object-cover"
          />
          <div className=" bg-black bg-opacity-30 p-4 flex flex-col justify-start">
            {editing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Destination"
                />
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Duration"
                />
                <input
                  type="text"
                  value={formData.groupType}
                  onChange={(e) => setFormData({...formData, groupType: e.target.value})}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Group Type"
                />
                <button
                  onClick={handleSave}
                  className="mt-2 w-full block bg-green-600 hover:bg-green-700 py-2 rounded font-bold"
                >Save Changes
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-4xl font-extrabold">{tripData.destination}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  27.01.2025 - 02.02.2025
                </p>
                <div className="flex items-center justify-between text-xs text-gray-200 mt-4">
                  <div className="flex items-center gap-1">
                    🕒 <span>{tripData.duration || '8 Days'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    👨‍👩‍👧‍👦 <span>{tripData.groupType || 'Group'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    🎯 <span>14 Activities</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
