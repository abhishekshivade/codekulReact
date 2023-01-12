import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from './components/ReactRouteer/Home/Navbar';
import HomePage from './components/ReactRouteer/Home/HomePage';
import About from './components/ReactRouteer/About/About';
import Contact from './components/ReactRouteer/ContactUs/Contact';
import Gallary from './components/ReactRouteer/Gallary/Gallary';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contactUs' element={<Contact/>}></Route>
        <Route path='/gallary' element={<Gallary/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
