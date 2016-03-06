import React, { Component } from 'react';

class Contact extends Component {
    handleSelect(e) {
        const contactInfo = {
            name: this.props.name,
            phoneNumber: this.props.phoneNumber
        };
        
        this.props.updateCurrentContact(contactInfo);
    }
    
    componentDidMount() {
        this.contact.addEventListener('click', this.handleSelect.bind(this));
    }
    
    render() {
        const {
            name,
            phoneNumber
        } = this.props;
        
        return (
            <div ref={c => this.contact = c}
                stlye={styles.contactDisplay}>
                <h6 style={styles.noMargin}>{name}</h6> <p>{phoneNumber}</p>
            </div>        
        );
    }
}

const styles = {
    noMargin: {
        margin: 0,
        padding: 0
    },
    contactDisplay: {
        cursor: 'pointer'
    }
}

export default Contact;