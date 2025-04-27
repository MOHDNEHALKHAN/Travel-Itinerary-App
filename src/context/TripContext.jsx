// src/context/TripContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [tripData, setTripData] = useState(() => {
    // Check localStorage pe data hai kya
    const saved = localStorage.getItem('tripData');
    return saved ? JSON.parse(saved) : {
      name: "",
      destination: "",
      duration: "",
      groupType: "",
      transportation: "Flight",
      accommodation: "Hotel",
      activities: [],
    };
  });

  useEffect(() => {
    localStorage.setItem('tripData', JSON.stringify(tripData));
  }, [tripData]);

  const updateTripData = (newData) => {
    setTripData(prev => ({ ...prev, ...newData }));
  };

  return (
    <TripContext.Provider value={{ tripData, setTripData, updateTripData }}>
      {children}
    </TripContext.Provider>
  );
};

export const UseTrip = () => useContext(TripContext);
