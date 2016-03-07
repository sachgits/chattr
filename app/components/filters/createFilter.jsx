import React, { Component, PropTypes } from 'react';

class CreateFilter extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.isOpen !== this.props.isOpen);
    }
    
    handleCreate(e) {
        let filterContactInput = this.filterContactInput.value;
        const filterWordsInput = this.filterWordsInput.value;
        
        if(keyInput !== '' && templateInput !== '') {
            const filters = filterWordsInput.split(',');
            console.log(filters);
        }
    }
    
    handleCancel(e) {
        this.props.toggleCreateFilterModal();
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
                <h4 className="mdl-dialog__title">Create New Filter</h4>
                <div className="mdl-dialog__content">
                  <input type="text"
                        ref={c => this.filterContactInput = c} />
                  <input type="text"
                        ref={c => this.filterWordsInput = c} />
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

CreateFilter.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleCreateFilterModal: PropTypes.func.isRequired
};

export default CreateFilter;