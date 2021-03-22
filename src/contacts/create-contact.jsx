import React, { useState,useRef } from 'react';
import FormInput from '../Components/FormInput';

function CreateContact({ addContact }) {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phNumberRef = useRef();
    const [newContact, setNewContact] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "phoneNumber": "",
        "status": "ACTIVE"
    });
    return (
        <React.Fragment>
            <h1>Create Contact</h1>
            <FormInput ref={firstNameRef} label="First Name" name="firstName" type="text"></FormInput>
            <FormInput ref={lastNameRef} label="Last Name" name="lastName" type="text"></FormInput>
            <FormInput ref={emailRef} label="Email" name="email" type="email"></FormInput>
            <FormInput ref={phNumberRef} label="Phone Number" name="phoneNumber" type="tel"></FormInput>
            <button 
                onClick={()=>addContact(
                    firstNameRef.current.value,
                    lastNameRef.current.value,
                    emailRef.current.value,
                    phNumberRef.current.value,
                    )}>
                        Add Contact
            </button>
        </React.Fragment>
    );
}
export default CreateContact;