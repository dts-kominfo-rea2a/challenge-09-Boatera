// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const SingleContact = (props) => {
    return <div class="card">
        <div class="contact">
            <img src={props.photo} alt="cat"></img>
            <div class="info">
                <h4>{props.name}</h4>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </div>
    </div>
};

const Contact = ({ data: contacts }) => {
    let contactCtx;
    if (Array.isArray(contacts)) {
        contactCtx = contacts.map((contact, i) => {
            return <li key={i}>
                <SingleContact photo={contact.photo} name={contact.name} phone={contact.phone} email={contact.email} />
            </li>
        })
    } else {
        const contact = contacts;
        const contactId = Math.random() * 10
        contactCtx = <li key={contactId}><SingleContact id={contactId} photo={contact.photo} name={contact.name} phone={contact.phone} email={contact.email} /></li>
    };
    return <ul>
        {contactCtx}
    </ul>
}

export default Contact;