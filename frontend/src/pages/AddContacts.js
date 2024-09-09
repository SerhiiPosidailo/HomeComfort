import { useEffect, useState } from "react";
import { ContactForm } from "../components/AddContacts/ContactForm/ContactForm";
import { Contacts } from "../components/AddContacts/Contacts/Contacts";
import { contactsService } from "../service/contactsService";

const AddContscts = () => {
    const [contacts, setContacts] = useState([])
    const [trigger, setTrigger] = useState(null)


    useEffect(() => {
        contactsService.getAll().then(({data})=> setContacts(data.data))
    }, [trigger]);

    return (
        <div>
            <ContactForm setTrigger={setTrigger}/>
            <hr/>
            <Contacts contacts={contacts} setTrigger={setTrigger}/>
        </div>
    );
};

export {AddContscts};