import React from 'react'

 const TextInput = (props) => {
    const {type, name, id, placeHolder, className, isRequired} = props;

    const requiredProp = (isRequired ? 'required' : '');

    return(<>
      {type === 'textarea' ? 
         <textarea type={type} name={name} id={id} placeholder={placeHolder} className={className} required={requiredProp}></textarea>:
         <input type={type} name={name} id={id} placeholder={placeHolder} className={className} required={requiredProp}></input>}
    </>)
 };

 export default TextInput;