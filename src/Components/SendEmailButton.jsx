import React, {useEffect} from 'react';
import Button from './Button.jsx';
import emailjs from '@emailjs/browser';

const SendEmailButton = (props) => {
    const {form, isEmailButtonDisabled, setIsEmailSent} = props;

    const emailServiceId = 'service_gelj25t';
    const emailTemplateId = 'template_uv02ko6';
    const emailPublicKey = 'R_26nK25PbEUi0GQs';

    const sendEmail = (e) => {
        console.log(form.current);

        emailjs.sendForm(emailServiceId, emailTemplateId, form.current, emailPublicKey)
          .then((result) => {
              console.log(result.text);
              setIsEmailSent(true);
          }, (error) => {
              console.log(error.text);
          });
      };
      

    return(
        <React.Fragment>
            <Button buttonStyle='btn--light--blue' onclick={sendEmail} isDisabled={isEmailButtonDisabled}>Send Request</Button>
        </React.Fragment>
    )
};

export default SendEmailButton;