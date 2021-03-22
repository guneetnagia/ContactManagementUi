import React, { useState, useEffect, useCallback, memo } from 'react';
import ListContacts from './contacts/view-contacts';
import CreateContact from './contacts/create-contact';
import DetailsContact from './contacts/details-contact';
import { Link, Route, Switch } from 'react-router-dom';
function App() {

    const [isView, setView] = useState(false);
    const [currentContact, setCurrentContact] = useState(null);
    const [contacts, setContacts] = useState([]);

    useEffect(
        async () => {
            console.log('click')
            const response = await fetch('http://localhost:9080/contacts/api/findAll');
            const contact = await response.json();
            console.log(contact)
            setContacts(contact);
        }, []);

    async function addContact(firstName, lastName, email, phNo) {
        console.log('clicked 2')
        console.log(firstName)
        const response = await fetch('http://localhost:9080/contacts/api/addContact', {
            method: 'POST',
            dataType: 'JSON',
            headers: {
                'Content-Type': "application/json; charset-utf-8",
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phoneNumber": phNo,
                "status": "ACTIVE"
            })
        });
    }

    const contactDetails = useCallback(async () => {
        console.log('click2');

    })

    return (
        <div className="container">
            <div className="row">
                <Switch>
                    <Route path="/" exact render={
                        routeProps => (
                            <div>
                                <h2>Contact Management - Evolent</h2>
                                <Link to="/contacts">All Contacts</Link>
                                <br />
                                <Link to="/add">Add Contacts</Link>
                            </div>
                        )
                    } />
                    <Route path="/contacts" >
                        <ListContacts contacts={contacts} />
                    </Route>
                    <Route path="/add" >
                        <CreateContact addContact={addContact} />
                    </Route >
                    <Route path="/view" >
                        <DetailsContact addContact={addContact} />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default memo(App);