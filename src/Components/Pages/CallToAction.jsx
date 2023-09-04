import React from 'react';
import '../../Styles/CallToAction.css';
import Button from '../Button.jsx';
import TextInput from '../TextInput.jsx';

const CallToAction = () => {
    return(
    <div className='call-to-action' id='callToActionSection'>
        <h6 className='text__md'>
            GET A QUOTE
        </h6>
        <div>
            <form className='call-to-acton-input-area'>
                <TextInput type='text' name='quantity' placeHolder='Quantity' className='footer-input'></TextInput>
                <TextInput type='text' name='openSize' placeHolder='Open Size (W x H)' className='footer-input'></TextInput>
                <TextInput type='text' name='closedSize' placeHolder='Closed Size (W x H)' className='footer-input'></TextInput>
                <TextInput type='text' name='printSideOption' placeHolder='footer-input' className='footer-input'></TextInput>
                <TextInput type='text' name='paperType' placeHolder='PaperType' className='footer-input'></TextInput>

                <Button buttonStyle='btn--primary'>Submit</Button>
            </form>
        </div>
    </div>);
};

export default CallToAction;