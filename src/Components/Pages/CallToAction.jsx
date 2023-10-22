import React, {useEffect, useRef, useState} from 'react';
import '../../Styles/CallToAction.css';
import Button from '../Button.jsx';
import TextInput from '../TextInput.jsx';
import Footer from '../Footer.jsx';
import SendEmailButton from '../SendEmailButton.jsx';
import DropDownListGeneric from '../DropDownListGeneric.jsx';

import settings from '../../Data/Settings.json'

const CallToAction = (props) => {
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isEmailButtonDisabled, setIsEmailButtonDisabled] = useState(false);

    const {ref, isStandAlone} = props;
    const formToSubmit = useRef();

    const printSideTypeOptions = [
        {
            value: 'SS',
            text: 'Single Sided'
        },
        {
            value: 'DS',
            text: 'Double Sided'
        }
    ];

    const onSubmitForm = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if(isEmailSent)
        {
            alert('You request was sent successfully');
            setIsEmailButtonDisabled(true);
            setIsEmailSent(false);
        }
    }, [isEmailSent]);
    
    return(
    <React.Fragment ref={ref}>
        <div className='call-to-action'>
        {/* {isStandAlone ? <h6 className='text__m m-t-m'>GET A QUOTE</h6> : null} */}
        <h6 className='text__m m-t-m'>Get A Quote</h6>
            <div className='call-to-action-info'>
                <div className='call-to-action-info-img-section'>
                    <img src={settings.hostingBaseUrl + '/Images/img-20.jpg'} className='call__to__action__img'></img>
                </div>
                <div className='call-to-action-info-input-section'>
                    <form ref={formToSubmit} id='formToTest' className='call-to-acton-input-area' onSubmit={e => onSubmitForm(e)}>
                        <TextInput type='text' name='name' placeHolder='Name' className='text-input' isRequired={true}></TextInput>
                        <TextInput type='text' name='phoneNumber' placeHolder='Phone Number' className='text-input half-size' isRequired={true}></TextInput>
                        <TextInput type='text' name='emailAddress' placeHolder='Email Address' className='text-input half-size' isRequired={true}></TextInput>
                        <TextInput type='text' name='companyName' placeHolder='Company Name (Optional)' className='text-input'></TextInput>
                        <TextInput type='text' name='quantity' placeHolder='Quantity' className='text-input'></TextInput>
                        <TextInput type='text' name='openSize' placeHolder='Open Size (W x H)' className='text-input half-size'></TextInput>
                        <TextInput type='text' name='closedSize' placeHolder='Closed Size (W x H)' className='text-input half-size'></TextInput>
                        <DropDownListGeneric id='printSideOption' name='printSideOption' dropDownOptions={printSideTypeOptions}></DropDownListGeneric>
                        <TextInput type='text' name='paperType' placeHolder='Paper Type' className='text-input'></TextInput>
                        <TextInput type='textarea' name='finishingType' placeHolder='Finishing (Lamination, Varnishing, etc.)' className='text-input half-size'></TextInput>
                        <TextInput type='textarea' name='bindingType' placeHolder='Binding (Stable Binding, others...)' className='text-input half-size'></TextInput>
                        <TextInput type='textarea' name='additionalInfo' placeHolder='Other Additional Information...' className='text-input'></TextInput>
                        
                        <SendEmailButton form={formToSubmit} isEmailButtonDisabled={isEmailButtonDisabled} setIsEmailSent={setIsEmailSent}></SendEmailButton>
                    </form>
                </div>
            </div>
        </div>
        {isStandAlone ? <Footer isShowLinks={false} isShowSocials={true} isStandAlone={true}/> : null}
    </React.Fragment>
    );
};

export default CallToAction;