import './App.css';
import NavBar from './Components/NavBar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import Services from './Components/Pages/Services.jsx';
import Products from './Components/Pages/Products.jsx';
import ContactUs from './Components/Pages/ContactUs.jsx';
import SingUp from './Components/Pages/SingUp.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/printingshop.github.io' exact element={<Home></Home>}></Route>
          <Route path='/Services' exact element={<Services></Services>}></Route>
          <Route path='/Products' exact element={<Products></Products>}></Route>
          <Route path='/ContactUs' exact element={<ContactUs></ContactUs>}></Route>
          <Route path='/sign-up' exact element={<SingUp></SingUp>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
