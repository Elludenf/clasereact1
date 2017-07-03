import React from 'react';

const ContactForm =(props) =>(
<div>
    <h3>First Name</h3>
    <input 
        type="text" 
        value={props.firstName}
        onChange={props.handleFirstNameChange}
    />
    <h3>Last Name</h3>
    <input 
        type="text" 
        value={props.lastName}
        onChange={props.handleLastNameChange}
    />
    <h3>Phone Name</h3>
    <input 
        type="text" 
        value={props.phone}
        onChange={props.handlePhoneNameChange}
    />
    
</div>
);

export default ContactForm;