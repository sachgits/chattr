import React, { Component, PropTypes } from 'react';
import ContactList from './contactList.jsx';
import AddContactInput from './addContactInput.jsx';

class ContactManager extends Component {
    render() {
        const {
            contactList,
            addContact,
            updateCurrentContact,
        } = this.props;
        
        return (
            <div style={styles.contactManager}>
            <h5 style={styles.title}>Contacts</h5>
                <ContactList contactList={contactList}
                            updateCurrentContact={updateCurrentContact}/>
                <AddContactInput addContact={addContact} />
            </div>
        );
    }
}

ContactManager.propTypes = {
    contactList: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired,
    updateCurrentContact: PropTypes.func.isRequired,
};

const styles = {
    contactManager: {
        height: 380,
        width: 200,
        border: '1px solid black',
        position: 'fixed',
        left: 100,
        top: 200,
        padding: '5px',
        textAlign: 'center'
    },
    title: {
        margin: 0,
        padding: 0
    }
}

export default ContactManager;