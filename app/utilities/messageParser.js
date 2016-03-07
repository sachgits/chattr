import { getTemplates, getFiltersByContact } from './localStorage.js';

export const replaceWithTemplates = (message) => {
    const templates = getTemplates();
    let regex;
    
    for(let i = 0; i < templates.length; i++) {
        regex = new RegExp(templates[i].key, "g");
        message = message.replace(regex, templates[i].value);
    }
    
    return message;
};

export const checkFilterViolation = (message, contact) => {
    const contactFilters = getFiltersByContact(contact);
    let filterViolation = false;
    
    //console.log(contactFilters);
    
    for(let i = 0; i < contactFilters.length; i++) {
        if(message.indexOf(contactFilters[i]) > -1) {
            filterViolation = true;
        }
    }
    
    return filterViolation;
};