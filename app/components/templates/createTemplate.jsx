import React, { Component, PropTypes } from 'react';

class CreateTemplate extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.isOpen !== this.props.isOpen);
    }
    
    handleCreate(e) {
        let keyInput = this.templateKeyInput.value;
        const templateInput = this.templateInput.value;
        
        if(keyInput !== '' && templateInput !== '') {
            keyInput = ":" + keyInput;
            this.props.handleSaveNewTemplate({ key: keyInput, value: templateInput });
            this.props.toggleCreateTemplateModal();
        }
    }
    
    handleCancel(e) {
        this.props.toggleCreateTemplateModal();
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
                  <input type="text"
                        ref={c => this.templateKeyInput = c} />
                  <input type="text"
                        ref={c => this.templateInput = c} />
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

CreateTemplate.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleCreateTemplateModal: PropTypes.func.isRequired,
    handleSaveNewTemplate: PropTypes.func.isRequired
};

export default CreateTemplate;