import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom"

function ListContacts({contacts}) {
    return (
        <React.Fragment>
            <h1 className="mt-5">Contacts Listing</h1>
            <p className="lead">List of your contacts</p>
            {
                contacts.map((contact,index)=>(
                    <li key={index}>
                    <Link to={{pathName:"/view", customContact:contact}} >{contact.firstName} {contact.lastName}</Link>
                    </li>
                ))
            }           
        </React.Fragment>
    );
}
export default ListContacts;