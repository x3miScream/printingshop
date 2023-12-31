import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Button from './Button.jsx';
import '../Styles/NavBar.css';
import menuLinks from '../Data/MenuLinks.json';
import settings from '../Data/Settings.json';

const NavBar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const closeMobileMenu = () => {
        setIsClicked(false);
    };

    const showButton = () => {
        if(window.innerWidth <= 960) 
        {
            setButton(false);
        }
        else
        {
            setButton(false);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to={settings.hostingBaseUrl + "/"} className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={settings.hostingBaseUrl + '/Images/Icons/logo.png'} className='navbar-logo-image' alt='logo'></img>
                        <img src={settings.hostingBaseUrl + '/Images/Icons/text_logo_black_on_white.png'} className='navbar-logo-name' alt='logo'></img>
                        {/* <span className='navbar-logo-name'>{settings.businessName}</span> */}
                        {/* <i className='fab fa-typo3' /> */}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                        {menuLinks.map((item, index) => {return item.isShowMenu ? <li key={index} className='nav-item'><Link to={settings.hostingBaseUrl + item.path} className='nav-links' onClick={closeMobileMenu}>{item.name}</Link></li> : ''})}
                        {/* <li className='nav-item'>
                            <Link to='/sing-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sing Up
                            </Link>
                        </li> */}
                    </ul>

                    {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar;