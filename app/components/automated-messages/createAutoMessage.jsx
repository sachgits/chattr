import React, { Component, PropTypes } from 'react';

class CreateAutomatedMessages extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.isOpen !== this.props.isOpen);
    }
    
    handleCreate(e) {
        const contactInput = this.contactInput.value;
        const messageInput = this.messageInput.value;
        
        if(contactInput !== '' && messageInput !== '') {
            this.props.handleSaveNewAutoMessage({ contact: contactInput, message: messageInput });
            this.props.toggleCreateAutoMessageModal();
        }
    }
    
    handleCancel(e) {
        this.props.toggleCreateAutoMessageModal();
    }
    
    componentDidMount() {
        this.createBtn.addEventListener('click', this.handleCreate.bind(this));
        this.cancelBtn.addEventListener('click', this.handleCancel.bind(this));
    }
    
    componentWillUpdate(nextProps) {
        if(nextProps.isOpen) {
            this.dialog.showModal();
        } else {
            this.dialog.close();
        }
    }
    
    render() {
        return (
            <dialog className="mdl-dialog"
                    ref={c => this.dialog = c}>
                <h4 className="mdl-dialog__title">Add New Message Template</h4>
                <div className="mdl-dialog__content">
                    <label>When</label>                    
                  <input type="text"
                        ref={c => this.contactInput = c} />
                    <label>Send</label>
                  <input type="text"
                        ref={c => this.messageInput = c} />
                </div>
                <div className="mdl-dialog__actions">
                  <button type="button" 
                        className="mdl-button"
                        ref={c => this.createBtn = c}>Create</button>
                  <button type="button" 
                        className="mdl-button close"
                        ref={c => this.cancelBtn = c}>Cancel</button>
                </div>
            </dialog>    
        );
    }
}

CreateAutomatedMessages.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleCreateAutoMessageModal: PropTypes.func.isRequired,
    handleSaveNewAutoMessage: PropTypes.func.isRequired
};

export default CreateAutomatedMessages;