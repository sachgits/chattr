import { SAVED_CONTACTS, 
         SAVED_TEMPLATES, 
         SAVED_FILTERS,
         PAST_MESSAGES
} from '../constants/storage.js';

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

export const saveTemplate = (newTemplate) => {
    const savedTemplates= getTemplates();
    savedTemplates.push(newTemplate);
    window.localStorage.setItem(SAVED_TEMPLATES, JSON.stringify(savedTemplates));
};

export const getTemplates = () => {
    let savedTemplates;
    try {
        savedTemplates = JSON.parse(window.localStorage.getItem(SAVED_TEMPLATES)) || [];
    } catch(e) {
        savedTemplates = [];
    }
    return savedTemplates;
};

export const saveNewFilter = (newFilter) => {
    const savedFilters = getFilters();
    savedFilters.push(newFilter);
    window.localStorage.setItem(SAVED_FILTERS, JSON.stringify(savedFilters));
};

export const getFilters = () => {
    let savedFilters;
    try {
        savedFilters = JSON.parse(window.localStorage.getItem(SAVED_FILTERS)) || [];
    } catch(e) {
        savedFilters = [];
    }
    return savedFilters;
};

export const getFiltersByContact = (contact) => {
    const filters = getFilters();
    let contactFilters = [];
    filters.forEach((filter) => {
       if(filter.contact === contact.name) {
            contactFilters = filter.filterWords;        
       } 
    });
    
    return contactFilters;
};

export const saveMessageForContact = (contact, message) => {
    const allMessages = getPastMessages();
    let pastMessagesFromContact = allMessages[contact.phoneNumber] || [];
    pastMessagesFromContact.push(message);
    allMessages[contact.phoneNumber] = pastMessagesFromContact;
    window.localStorage.setItem(PAST_MESSAGES, JSON.stringify(allMessages));
};

export const getPastMessages = () => {
    let messagesFromContact;
    try {
        messagesFromContact = JSON.parse(window.localStorage.getItem(PAST_MESSAGES)) || {};
    } catch(e) {
        messagesFromContact = {};
    }
    
    return messagesFromContact;
};

export const getPastMessagesFromContact = (contact) => {
    const pastMessages = getPastMessages();
    let pastMessagesFromContact = pastMessages[contact.phoneNumber] || [];
    
    return pastMessagesFromContact;
};

export const saveAutoMessageForContact = ({contact, message}) => {
    const allMessages = getPastMessages();
    let pastMessagesFromContact = allMessages[contact.phoneNumber] || [];
    pastMessagesFromContact.push(message);
    allMessages[contact.phoneNumber] = pastMessagesFromContact;
    window.localStorage.setItem(PAST_MESSAGES, JSON.stringify(allMessages));
};

export const getAutoMessages = () => {
    let messagesFromContact;
    try {
        messagesFromContact = JSON.parse(window.localStorage.getItem(PAST_MESSAGES)) || {};
    } catch(e) {
        messagesFromContact = {};
    }
    
    return messagesFromContact;
};

export const getAutoMessagesForContact = (contact) => {
    const pastMessages = getPastMessages();
    let pastMessagesFromContact = pastMessages[contact.phoneNumber] || [];
    
    return pastMessagesFromContact;
};

export const clearLocalStorage = () => {
    window.localStorage.setItem(SAVED_CONTACTS, '[]');
    window.localStorage.setItem(PAST_MESSAGES, '{}');
};