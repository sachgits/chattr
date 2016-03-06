import { Component, PropTypes } from 'react';
import ContactList from './contactList.jsx';
import AddContactInput from './addContactInput.jsx';

class ContactManager extends Component {
    static propTypes = {
        contactList: PropTypes.array.isRequired       
    };
    
    render() {
        return (
            <div>
                <ContactList contactList={contactList}/>
                <AddContactInput />
            </div>
        );
    }
}