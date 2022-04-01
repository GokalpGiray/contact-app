import { useState, useEffect } from 'react';

import "./styles.css";

import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Gökalp",
            phone_number: "5326239376"
        },
        {
            fullname:"Mehmet",
            phone_number: "1231231234"
        },
        {
            fullname:"Ayşe",
            phone_number: "4564564567"
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts