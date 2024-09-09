import { contactsService } from "../../../service/contactsService";

import css from './Contact.module.css'

const Contact = ({contact, setTrigger}) => {
    const {id, name, link} = contact

    const handleDelete = async () => {
        try {
            await contactsService.deleteContact(id);
            setTrigger(prev => !prev);
        } catch (error) {
            console.error("Failed to delete category", error);
        }
    };

    return (
        <div className={css.Contact}>
            <div><a href={link} target="_blank" rel="noopener noreferrer"><h3>{name}</h3></a></div>
            <button onClick={handleDelete}>Видалити</button>
        </div>
    );
};

export { Contact };
