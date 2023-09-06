import './App.css';
import NavBar from './Components/NavBar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import Services from './Components/Pages/Services.jsx';
import Products from './Components/Pages/Products.jsx';
import ContactUs from './Components/Pages/ContactUs.jsx';
import SingUp from './Components/Pages/SingUp.jsx';
import menuLinks from './Data/MenuLinks.json';
import settings from './Data/Settings.json'

function App() {

  const componentsRegistry = {
    "Home": <Home></Home>,
    "Services": <Services></Services>,
    "Products": <Products></Products>,
    "ContactUs": <ContactUs></ContactUs>,
    "SignUp": <SingUp></SingUp>
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {menuLinks.map((item, index) => {return <Route path={settings.hostingBaseUrl + item.path} exact element={componentsRegistry[item.element]}></Route>})}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
