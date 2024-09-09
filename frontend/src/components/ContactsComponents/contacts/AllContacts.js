import React, {useEffect, useState} from 'react';
import css from './contacts.module.css'

import { contactsService } from '../../../service/contactsService';
import { OneContact } from '../contact/OneContact';

const AllContacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        contactsService.getAll().then(({data})=> setContacts(data.data))
    }, []);

    return (
        <div className={css.Contacts}>
            <h1>Для замовленя звертайтесь</h1>
            {contacts.map(contact => <OneContact key={contact.id} contact={contact}/>)}
        </div>
    );
};

export {
    AllContacts
};