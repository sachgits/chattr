import React, { PropTypes } from 'react';
import { KEY_ENTER } from '../constants/keyCodes.js';

class ContactInput extends React.Component {
    
    handleKeyPress(e) {
        console.log('key press');
        if(e.keyCodes === KEY_ENTER) {
            this.props.handleContactInput(this.input.value);
            this.input.value = '';
        }            
    }
    
    render() {
        return (
            <div>
                <h5 style={styles.inlineObject} >Input Contact</h5>
                <input type="text"
                    id="contactInput"
                    ref={(c) => this.input = c}
                    onKeyPress={this.handleKeyPress}
                    style={styles.inlineObject} />
            </div>
        );
    }
}

const styles = {
    inlineObject: {
        display: 'inline-block',
        marinLeft: 10,
        marginRight: 10
    } 
};

export default ContactInput;