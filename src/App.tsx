import Navbar from "@/Navbar"
import About from "@/About"
import TakeAction from "@/TakeAction"
import Home from "@/Home"
import Footer from "@/Footer"
import { ChosenPage } from "@/constant/types";
import { useState } from "react";

function App() {
  const [chosenPage, setChosenPage] = useState<ChosenPage>(ChosenPage.Home)
 
  return (
    <div className='app'>
      <Navbar
      chosenPage={chosenPage}
      setChosenPage={setChosenPage}
      />
      <Home setChosenPage={setChosenPage} />
      <About setChosenPage={setChosenPage} />
      <TakeAction setChosenPage={setChosenPage} />
      <Footer />
    </div>      
  );
}

export default App
