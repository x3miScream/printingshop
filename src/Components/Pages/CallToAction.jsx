import React from 'react';
import '../../Styles/CallToAction.css';
import Button from '../Button.jsx';
import TextInput from '../TextInput.jsx';
import Footer from '../Footer.jsx';
import settings from '../../Data/Settings.json'

const CallToAction = (props) => {
    const {ref, isStandAlone} = props;
    
    return(
    <React.Fragment ref={ref}>
        <div className='call-to-action'>
        {isStandAlone ? <h6 className='text__md m-t-m'>GET A QUOTE</h6> : null}
            <div className='call-to-action-info'>
                <div className='call-to-action-info-img-section'>
                    <img src={settings.hostingBaseUrl + '/Images/img-20.jpg'} className='call__to__action__img'></img>
                </div>
                <div className='call-to-action-info-input-section'>
                    <form className='call-to-acton-input-area'>
                        <TextInput type='text' name='quantity' placeHolder='Quantity' className='text-input'></TextInput>
                        <TextInput type='text' name='openSize' placeHolder='Open Size (W x H)' className='text-input'></TextInput>
                            <TextInput type='text' name='closedSize' placeHolder='Closed Size (W x H)' className='text-input'></TextInput>
                        <TextInput type='text' name='printSideOption' placeHolder='footer-input' className='text-input'></TextInput>
                        <TextInput type='text' name='paperType' placeHolder='PaperType' className='text-input'></TextInput>

                        <Button buttonStyle='btn--light--blue'>Send Request</Button>
                    </form>
                </div>
            </div>
        </div>
        {isStandAlone ? <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/> : null}
    </React.Fragment>
    );
};

export default CallToAction;