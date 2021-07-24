import React,{useState} from 'react'
import ThemeContext from './Context/ThemeContext';
import Header from './Component/Header';
import HeroSection from './Component/HeroSection';

const App = () =>{

  const ThemeHook = useState("light")

  return(
    <ThemeContext.Provider value={ThemeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>

    </ThemeContext.Provider>
  )

}




export default App;
