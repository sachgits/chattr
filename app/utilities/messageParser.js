import { getTemplates } from './localStorage.js';

export const parseMessage = (message) => {
    const templates = getTemplates();
    let regex;
    
    for(let i = 0; i < templates.length; i++) {
        regex = new RegExp(templates[i].key, "g");
        message = message.replace(regex, templates[i].value);
    }
    
    return message;
};