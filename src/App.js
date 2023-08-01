
import './App.css';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter} from "react-router-dom";
// import { HashLink as Link} from "react-router-hash-link";
import { Navbar } from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Service } from './components/services/Service';
import Philosophy from './components/Philosophy/Philosophy';
import { Working } from './components/Working/Working';
import Team from './components/Teams/Team';
import { Contact } from './components/Contact/Contact';
// import Home from './components/Home/Home';
 //xcvbf

function App() {
  return (
    <>
   
   

   <BrowserRouter>
     
       <Navbar />
    

      <Home />  
      <About />
      <Service /> 
      <Philosophy/>
      <Working />
      <Team />
      <Contact/>
    </BrowserRouter>

    
   
   
   
    


    

    </>
       
   
  );
}

export default App;
