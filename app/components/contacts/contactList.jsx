import React from 'react';
import Contact from './contact.jsx';

const ContactList = ({
    contactList,
    updateCurrentContact,
}) => (
    <div style={styles.contactList}>
        {contactList.map((contact, index) => (
            <Contact key={index} 
                    name={contact.name}
                    phoneNumber={contact.phoneNumber}
                    updateCurrentContact={updateCurrentContact}/>
        ))}
    </div>
);

const styles = {
    contactList: {
        height: '70%',
        width: '100%',
        border: '1px solid black',
        margin: '0 auto'
    }    
};

export default ContactList;