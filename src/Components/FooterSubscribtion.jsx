import React from 'react';
import Button from './Button.jsx';

const FooterSubscribtion = () => {
    return(<>
        <section className='footer-subscribtion'>
            <p className='footer-subscribtion-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscribtion-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-area'>
                <form>
                <input type='email' name='email' placeholder='Your Emails' className='footer-input'></input>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
    </>);
};

export default FooterSubscribtion;