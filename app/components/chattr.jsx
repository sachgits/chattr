import React from 'react';
import io from 'socket.io-client';

import Header from './header.jsx';
import CreateTemplate from './templates/createTemplate.jsx';
import CreateFilter from './filters/createFilter.jsx';
import CreateAutoMessage from './automated-messages/createAutoMessage.jsx';
import ContactInput from './contactInput.jsx';
import ChatStream from './chatStream.jsx';
import ChatInput from './chatInput.jsx';
import ContactManager from './contacts/contactManager.jsx';
import CurrentContactDisplay from './currentContactDisplay.jsx';

import { ajax } from '../utilities/ajax.js';
import { getContacts, 
         saveNewContact, 
         saveTemplate, 
         saveNewFilter,
         getPastMessagesFromContact,
         saveMessageForContact,
         clearLocalStorage,
         saveAutoMessageForContact
} from '../utilities/localStorage.js';
const testPhone = '+14794399408';

class Chattr extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            socket: null,
            contactList: getContacts(),
            currentContact: {
                name: 'Select a contact',
                phoneNumber: '18000000000'
            },
            currentContactsPastMessages: [],
            myNumber: testPhone,
            createTemplateOpen: false,
            createFilterOpen: false,
            createAutoMessageOpen: false
        };
        
        this.updateCurrentContact = this.updateCurrentContact.bind(this);
        this.sendChatMessage = this.sendChatMessage.bind(this);
        this.toggleCreateTemplateModal = this.toggleCreateTemplateModal.bind(this);
        this.toggleCreateFilterModal = this.toggleCreateFilterModal.bind(this);
        this.toggleCreateAutoMessageModal = this.toggleCreateAutoMessageModal.bind(this);
    }
    
    updateCurrentContact(newContact) {
        this.setState({
            currentContact: newContact,
            currentContactsPastMessages: getPastMessagesFromContact(newContact)
        });
    }
    
    sendChatMessage(body) {
        if(this.state.currentContact !== '') {
            ajax.post('/sendMessage', {
                to: this.state.currentContact.phoneNumber,
                from: this.state.myNumber,
                msgBody: body
            });
            saveMessageForContact({ phoneNumber: message.from }, body);
            this.setState({ currentContactsPastMessages: getPastMessagesFromContact(this.state.currentContact) });
        }
    }
    
    toggleCreateTemplateModal() {
        if(this.state.createTemplateOpen) {
            this.setState({ createTemplateOpen: false });
        } else {
            this.setState({ createTemplateOpen: true });    
        }
    }
    
    toggleCreateFilterModal() {
        if(this.state.createFilterOpen) {
            this.setState({ createFilterOpen: false });
        } else {
            this.setState({ createFilterOpen: true });    
        }
    }
    
    toggleCreateAutoMessageModal() {
        if(this.state.createAutoMessageOpen) {
            this.setState({ createAutoMessageOpen: false });
        } else {
            this.setState({ createAutoMessageOpen: true });    
        }
    }
    
    handleSaveNewContact({ name, phoneNumber }) {
        saveNewContact({ name, phoneNumber });
        const newContactList = getContacts();
        this.setState({ contactList: newContactList });
    }
    
    handleSaveNewTemplate(newTemplate) {
        saveTemplate(newTemplate);
    }
    
    handleSaveNewFilter(newFilter) {
        saveNewFilter(newFilter);
    }
    
    handleSaveNewAutoMessage({contact, message}) {
        saveAutoMessageForContact({contact, message});
    }
    
    componentDidMount() {
        const socket = io();
        
        socket.on('messageReceived', (message) => {
           saveMessageForContact({ phoneNumber: message.from }, message.body);
           this.setState({ currentContactsPastMessages: getPastMessagesFromContact(this.state.currentContact) });
        });
        
        this.setState({ socket });
    }
    
    componentWillMount() {
        //clearLocalStorage();
    }
    
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <Header toggleCreateTemplateModal={this.toggleCreateTemplateModal}
                    toggleCreateFilterModal={this.toggleCreateFilterModal}
                    toggleCreateAutoMessageModal={this.toggleCreateAutoMessageModal}/>
              <main className="mdl-layout__content">
                <div className="page-content" style={styles.pageContent}>
                    <CurrentContactDisplay name={this.state.currentContact.name}
                                            phoneNumber={this.state.currentContact.phoneNumber} />
                    <ContactManager contactList={this.state.contactList}
                                    addContact={this.handleSaveNewContact.bind(this)}
                                    updateCurrentContact={this.updateCurrentContact}/>
                    <ChatStream messages={this.state.currentContactsPastMessages}/>
                    <ChatInput sendChatMessage={this.sendChatMessage}
                                currentContact={this.state.currentContact}/>
                    <CreateTemplate isOpen={this.state.createTemplateOpen}
                                    toggleCreateTemplateModal={this.toggleCreateTemplateModal}
                                    handleSaveNewTemplate={this.handleSaveNewTemplate}/>
                    <CreateFilter isOpen={this.state.createFilterOpen}
                                toggleCreateFilterModal={this.toggleCreateFilterModal}
                                handleSaveNewFilter={this.handleSaveNewFilter}/>
                    <CreateAutoMessage isOpen={this.state.createAutoMessageOpen}
                                    toggleCreateAutoMessageModal={this.toggleCreateAutoMessageModal}
                                    handleSaveNewAutoMessage={this.handleSaveNewAutoMessage} />
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