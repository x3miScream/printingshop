import './App.css';
import NavBar from './Components/NavBar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import Services from './Components/Pages/Services.jsx';
import Products from './Components/Pages/Products.jsx';
import ProductItem from './Components/Pages/ProductItem.jsx';
import ContactUs from './Components/Pages/ContactUs.jsx';
import SingUp from './Components/Pages/SingUp.jsx';
import BusinessCard from './Components/Pages/BusinessCard.jsx';
import CallToAction from './Components/Pages/CallToAction.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import menuLinks from './Data/MenuLinks.json';
import settings from './Data/Settings.json'
import WhatsAppButton from './Components/WhatsAppButton.jsx';

function App() {

  const componentsRegistry = {
    "Home": <Home></Home>,
    "Services": <Services isStandAlone={true}></Services>,
    "Products": <Products isStandAlone={true}></Products>,
    "ProductItem": <ProductItem isStandAlone={true}></ProductItem>,
    "ContactUs": <ContactUs isStandAlone={true}></ContactUs>,
    "BusinessCard": <BusinessCard isStandAlone={true}></BusinessCard>,
    "CallToAction": <CallToAction isStandAlone={true}></CallToAction>,
    "SignUp": <SingUp isStandAlone={true}></SingUp>
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar/>
        <Routes>
          {menuLinks.map((item, index) => {return <Route key={index} path={settings.hostingBaseUrl + item.path} exact element={componentsRegistry[item.element]}></Route>})}
        </Routes>
        <WhatsAppButton></WhatsAppButton>
      </BrowserRouter>
    </div>
  );
}

export default App;
