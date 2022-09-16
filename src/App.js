import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages
import How from './pages/How/How';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import HomePages from './pages/PageConent/HomePages';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={ <HomePages/> }></Route>
            <Route path='/how' element={ <How/> }></Route>
            <Route path='/contact' element={ <Contact/> }></Route>
            <Route path='/about' element={ <About/> }></Route>
          </Routes>
        </div>      
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
