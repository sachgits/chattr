import { SAVED_CONTACTS } from '../constants/storage.js';

export const saveNewContact = ({ name, phoneNumber }) => {
    const savedContacts = window.localStorage.getItem(SAVED_CONTACTS) || '[]';
    let savedContactJSON;
    if(savedContacts) {
        try {
            savedContactJSON = JSON.parse(savedContacts);       
        } catch(e) {
            savedContactJSON = [];
        }
    }
    
    savedContactJSON.push({ id: savedContacts.length, name, phoneNumber });
    window.localStorage.setItem(SAVED_CONTACTS, JSON.stringify(savedContactJSON));
};

export const getContacts = () => {
    let savedContactsJSON;
    try {
        savedContactsJSON = JSON.parse(window.localStorage.getItem(SAVED_CONTACTS));
    } catch(e) {
        savedContactsJSON = [];
    }
    return savedContactsJSON;
};

export const clearLocalStorage = () => {
    window.localStorage.setItem(SAVED_CONTACTS, '[]');      
};