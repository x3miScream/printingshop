import React from 'react'

const DropDownListGeneric = (props) => {
    const {dropDownOptions, id, name} = props;

    if(dropDownOptions === undefined || dropDownOptions === null)
        dropDownOptions = [];

    if(name === undefined || name === null || name ==='')
        name = id;

    return (
        <>
            <select className='text-input'>
                {dropDownOptions.map((item, index) => {return <option key={item.value} value={item.value}>{item.text}</option>})}
            </select>
        </>
    );
};

export default DropDownListGeneric;