import React from 'react';

const FormInput=React.forwardRef((props,ref)=>{
    const {label, name, value,type} = props;
    return(
        <div>
            <label>{label}</label>
            <br />
            <input ref={ref} name={name} value={value} type={type}/>
        </div>
    )
});

export default FormInput;