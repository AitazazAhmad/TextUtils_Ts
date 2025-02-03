import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'; // Import the About component
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom

function App() {
   const [mode, setMode] = useState('light'); // Check whether dark mode is enabled or not!
   const [alert, setAlert] = useState<{ message: string; type: string } | null>(null);

   const showAlert = (message: string, type: string) => {
      setAlert({ message, type });
      setTimeout(() => {
         setAlert(null);
      }, 2000); // Alert will disappear after 2 seconds
   };

   const toggleMode = () => {
      if (mode === 'light') {
         setMode('dark');
         document.body.style.backgroundColor = '#102d39'; // Set background to black for dark mode
         showAlert('Dark mode has been enabled!', 'success');
      } else {
         setMode('light');
         document.body.style.backgroundColor = 'white'; // Set background to white for light mode
         showAlert('Light mode has been enabled!', 'success');
      }
   };

   // Set initial background color based on mode when the component mounts
   useEffect(() => {
      document.body.style.backgroundColor = mode === 'dark' ? '#102d39' : 'white';
   }, [mode]);

   return (
      <Router>
         <>
            <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} aboutText='About' />
            {alert && (
               <div className={`alert alert-${alert.type}`} role="alert">
                  {alert.message}
               </div>
            )}

            <div className="container mx-5">
               <Routes>
                  <Route path="/" element={<TextForm heading={"Enter The Text Here!"} mode={mode} showAlert={showAlert} />} />
                  <Route path="/about" element={<About />} /> {/* Route for About page */}
               </Routes>
            </div>
         </>
      </Router>
   );
}

export default App;