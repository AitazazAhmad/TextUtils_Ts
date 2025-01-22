import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
   return (
      <>
         <Navbar title={"TextUtles"} aboutText='About TextUtiles' />
         <div className="container" mx-5>
            <TextForm heading={"Enter The Text Here!"} />

         </div >


      </>
   );
}

export default App; 