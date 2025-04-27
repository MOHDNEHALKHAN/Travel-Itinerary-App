import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UseTrip } from '../context/TripContext';  // Correct import

function Onboarding() {
  const { setTripData } = UseTrip(); // yeh line important hai! context se lena hai
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [groupType, setGroupType] = useState('');

  const navigate = useNavigate();

  const handleStart = () => {
    setTripData({ name, destination, duration, groupType }); // ab yeh chalega!
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 p-6">
      <div className="w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          Plan Your Journey, Your Way!
        </h1>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Let's create your personalised travel experience
        </p>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-white text-sm font-semibold mb-2">
            Your Name
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 text-white placeholder-gray-500 border-none rounded-lg p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
              🙋
            </span>
          </div>
        </div>

        {/* Destination */}
        <div className="mb-6">
          <label className="block text-white text-sm font-semibold mb-2">
            Where would you like to go?
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-gray-800 text-white placeholder-gray-500 border-none rounded-lg p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
              📍
            </span>
          </div>
        </div>

        {/* Duration */}
        <div className="mb-6">
          <label className="block text-white text-sm font-semibold mb-2">
            How long will you stay?
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Select Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-gray-800 text-white placeholder-gray-500 border-none rounded-lg p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
              🕒
            </span>
          </div>
        </div>

        {/* Group Type */}
        <div className="mb-6">
          <label className="block text-white text-sm font-semibold mb-4">
            Who are you traveling with?
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['Solo', 'Couple', 'Family', 'Friends'].map((option) => (
              <button
                key={option}
                onClick={() => setGroupType(option)}
                className={`flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm ${
                  groupType === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {option === 'Solo' && '🧍'}
                {option === 'Couple' && '👫'}
                {option === 'Family' && '👨‍👩‍👧‍👦'}
                {option === 'Friends' && '🧑‍🤝‍🧑'}
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleStart}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
