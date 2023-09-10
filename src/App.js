import './App.css';
import NavBar from './Components/NavBar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import Services from './Components/Pages/Services.jsx';
import Products from './Components/Pages/Products.jsx';
import ContactUs from './Components/Pages/ContactUs.jsx';
import SingUp from './Components/Pages/SingUp.jsx';
import BusinessCard from './Components/Pages/BusinessCard.jsx';
import CallToAction from './Components/Pages/CallToAction.jsx';
import Footer from './Components/Footer.jsx';
import menuLinks from './Data/MenuLinks.json';
import settings from './Data/Settings.json'

function App() {

  const componentsRegistry = {
    "Home": <Home></Home>,
    "Services": <Services isStandAlone={true}></Services>,
    "Products": <Products isStandAlone={true}></Products>,
    "ContactUs": <ContactUs isStandAlone={true}></ContactUs>,
    "BusinessCard": <BusinessCard isStandAlone={true}></BusinessCard>,
    "CallToAction": <CallToAction isStandAlone={true}></CallToAction>,
    "SignUp": <SingUp isStandAlone={true}></SingUp>
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
