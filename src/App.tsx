import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from 'react';

function App() {
   const [mode, setMode] = useState('light'); // Check whether dark mode is enabled or not!

   const toggleMode = () => {
      if (mode === 'light') {
         setMode('dark');
         document.body.style.backgroundColor = '#102d39'; // Set background to black for dark mode
      } else {
         setMode('light');
         document.body.style.backgroundColor = 'white'; // Set background to white for light mode
      }
   };

   // Set initial background color based on mode when the component mounts
   useEffect(() => {
      document.body.style.backgroundColor = mode === 'dark' ? '#102d39' : 'white';
   }, [mode]);

   return (
      <>
         <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} aboutText='About' />
         <div className="container mx-5">
            <TextForm heading={"Enter The Text Here!"} mode={mode} />
         </div>
      </>
   );
}

export default App;