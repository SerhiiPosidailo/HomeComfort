import React from 'react';
import css from './contact.module.css'
import { FaInstagram, FaTelegramPlane, FaFacebookF } from 'react-icons/fa';

const OneContact = ({contact}) => {
    const {link, name} = contact;

    const getIcon = (name) => {
        switch (name) {
            case 'Instagram':
                return <FaInstagram className={css.icon} />;
            case 'Telegram':
                return <FaTelegramPlane className={css.icon} />;
            case 'Facebook':
                return <FaFacebookF className={css.icon} />;
            default:
                return null;
        }
    };

    return (
        <div className={css.blockContact}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                {getIcon(name)}
                {name}
            </a>
        </div>
    );
};

export {OneContact};