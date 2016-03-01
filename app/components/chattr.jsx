import React from 'react';
import Header from './header.jsx';
import ContactInput from './contactInput.jsx';
import ChatStream from './chatStream.jsx';
import ChatInput from './chatInput.jsx';
import { ajax } from '../utilities/ajax.js';

class Chattr extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentContact: '',
            myNumber: '+14794399408'
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
                to: this.state.currentContact,
                from: this.state.myNumber,
                msgBody: body
            });
        }
    }
    
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <Header />
              <main className="mdl-layout__content">
                <div className="page-content" style={styles.pageContent}>
                    <ContactInput handleContactInput={this.updateCurrentContact} />
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