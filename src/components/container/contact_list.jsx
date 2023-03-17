import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {
    const defaultcontact = new Contact('antony', 'gonzales', 'antoby@gmail.com', true);
    return (
        <div>
            tarea
            <ContactComponent props={defaultcontact}></ContactComponent>
        </div>
    )
}

export default ContactListComponent