import React from 'react'

 const TextInput = (props) => {
    const {type, name, id, placeHolder, className} = props;

    return(<input type={type} name={name} id={id} placeholder={placeHolder} className={className}></input>)
 };

 export default TextInput;