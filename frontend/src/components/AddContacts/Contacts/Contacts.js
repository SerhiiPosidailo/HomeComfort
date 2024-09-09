import { Contact } from "../Contact/Contact";

const Contacts = ({contacts, setTrigger}) => {

    return (
        <div>
            {contacts.map(contact => 
                <Contact key={contact.id}
                contact={contact}
                setTrigger={setTrigger}/>)}
        </div>
    );
};

export { Contacts };