import React, { Component, PropTypes } from 'react';

class AddContactInput extends Component {
    handleInput(e) {
        const name = this.nameInput.value;
        const phoneNumber = this.numberInput.value;
        
        if(name !== '' && phoneNumber !== '') {
            this.props.addContact({ name, phoneNumber });
            this.nameInput.value = '';
            this.numberInput.value = '';
        }
    }
    
    componentDidMount() {
        this.addBtn.addEventListener('click', this.handleInput.bind(this));
    }
    
    render() {
        return (
            <div style={styles.addContactInput}>
                <input type="text"
                        name="name"
                        style={styles.input}
                        ref={c => this.nameInput = c} />
                <input type="tel"
                        name="phoneNumber"
                        style={styles.input}
                        ref={c => this.numberInput = c} />
                <button ref={c => this.addBtn = c}>Add Contact</button>
            </div>
        );
    }
}

AddContactInput.propTypes = {
    addContact: PropTypes.func.isRequired    
};

const styles = {
    addContactInput: {
        marginTop: 25,
        width: '100%'
    },
    input: {
        margin: 2
    }
}

export default AddContactInput;