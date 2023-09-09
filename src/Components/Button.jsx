import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({children, type, onClick, buttonStyle, buttonSize, link, isLink}) => {
    if(isLink === '')
        isLink = false;

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <React.Fragment>
            {(isLink ? 
                <Link to={link} className='btn-mobile'>
                    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onclick}
                    type={type}>
                        {children}
                    </button>
                </Link>
                 : 
                 <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onclick}
                    type={type}>
                        {children}
                </button>
                 )}
        </React.Fragment>
    );
};

export default Button;