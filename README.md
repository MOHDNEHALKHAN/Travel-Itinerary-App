
# Travel Itinerary App

A lightweight and dynamic travel itinerary planner built with **React** and **Vite**.  
This application provides users with a smooth onboarding experience and an intuitive dashboard to plan their trips efficiently.

---

## 🚀 Project Overview

The **Travel Itinerary App** allows users to create, view, and manage travel plans with ease. The focus of the project is on:

- Simple and minimalistic UI
- State management using React Context
- Fast and optimized build using Vite

---

## 📁 Project Structure

```
Travel_Itinerary-App-main/
├── public/               
│   └── vite.svg
├── src/                  # Main application source code
│   ├── assets/           # Static assets like images
│   │   └── react.svg
│   ├── components/       # Reusable UI components
│   │   └── ThirdPane.jsx
│   ├── context/          # Global context management
│   │   └── TripContext.jsx
│   ├── pages/            # Application pages
│   │   ├── Dashboard.jsx
│   │   └── Onboarding.jsx
│   ├── App.jsx         
│   ├── App.css        
│   ├── index.css
│   └── main.jsx        
├── index.html            
├── package.json         
├── vite.config.js        
├── eslint.config.js      
└── .gitignore            
```

---

## 🏗️ Component Hierarchy

```
main.jsx
 └── App.jsx
      ├── Onboarding.jsx (page)
      ├── Dashboard.jsx (page)
           └── ThirdPane.jsx (component)
```

- `App.jsx` serves as the core router and layout controller.
- `Onboarding.jsx` handles initial user setup.
- `Dashboard.jsx` displays the user's travel itinerary.
- `ThirdPane.jsx` is a reusable section inside the dashboard.
- `TripContext.jsx` manages the global trip-related state across pages.

---

## ⚡ Technologies Used

- **React** (Frontend Framework)
- **Vite** (Build Tool)
- **Context API** (State Management)
- **Tailwind CSS** (Styling)

---

## 🛠️ Challenges Faced

- **Context Management**: Setting up a flexible context to handle trip data across different components required careful structure planning to avoid prop drilling.

- **State Synchronization**: Ensuring state consistency between onboarding and dashboard views demanded thoughtful state updates and resets.

---

## 📌 Future Improvements

- Add authentication for user-specific itineraries.
- Expand trip details (destinations, activities, notes).
- Mobile responsiveness enhancements.
- Integration with external APIs (e.g., Google Places, Weather).

---

# 🛠️ Getting Started

Follow these steps to set up and run the project locally:

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- npm (comes with Node.js)

You can check if you have them installed by running:

```bash
node -v
npm -v
```

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/MOHDNEHALKHAN/Travel-Itinerary-App.git
```

2. **Navigate into the project directory**

```bash
cd Travel-Itinerary-App
```

3. **Install dependencies**

```bash
npm install
```

---

## Running the Application

After installing the dependencies, you can start the development server:

```bash
npm run dev
```

This will start the app on:

```
http://localhost:5173
```

_Open your browser and visit the above URL to see the app running._
