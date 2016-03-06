import React from 'react';
import Header from './header.jsx';
import ContactInput from './contactInput.jsx';
import ChatStream from './chatStream.jsx';
import ChatInput from './chatInput.jsx';
import ContactManager from './contacts/contactManager.jsx';
import CurrentContactDisplay from './currentContactDisplay.jsx';
import { ajax } from '../utilities/ajax.js';
import { getContacts, saveNewContact, clearLocalStorage } from '../utilities/localStorage.js';
const testPhone = '+15005550006';

class Chattr extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            contactList: getContacts(),
            currentContact: {
                name: 'no contact',
                phoneNumber: '1234'
            },
            myNumber: testPhone
        };
        
        this.updateCurrentContact = this.updateCurrentContact.bind(this);
        this.sendChatMessage = this.sendChatMessage.bind(this);
    }
    
    updateCurrentContact(newContact) {
        this.setState({
            currentContact: newContact
        });
    }
    
    sendChatMessage(body) {
        if(this.state.currentContact !== '') {
            ajax.post('/sendMessage/', {
                to: this.state.currentContact.phoneNumber,
                from: this.state.myNumber,
                msgBody: body
            });
        }
    }
    
    handleSaveNewContact({ name, phoneNumber }) {
        saveNewContact({ name, phoneNumber });
        const newContactList = getContacts();
        this.setState({ contactList: newContactList });
    }
    
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <Header />
              <main className="mdl-layout__content">
                <div className="page-content" style={styles.pageContent}>
                    <CurrentContactDisplay name={this.state.currentContact.name}
                                            phoneNumber={this.state.currentContact.phoneNumber} />
                    <ContactManager contactList={this.state.contactList}
                                    addContact={this.handleSaveNewContact.bind(this)}
                                    updateCurrentContact={this.updateCurrentContact}/>
                    <ChatStream />
                    <ChatInput sendChatMessage={this.sendChatMessage} />
                </div>
              </main>
            </div>  
        );
    }
}

const styles = {
    pageContent: {
        margin: '0 auto',
        textAlign: 'center'
    }    
};

export default Chattr;