import React from 'react';

class ChatInput extends React.Component {
    handleChatInput() {
        const chatBody = this.input.value;
        this.props.sendChatMessage(chatBody);
        this.input.value = '';
    }
    
    componentDidMount() {
        this.sendBtn.addEventListener('click', this.handleChatInput.bind(this));
    }
    
    render() {
        return (
            <div style={styles.chatBox}>
                <textarea id="chatInput"
                    ref={(c) => this.input = c}
                    style={styles.input}></textarea>
                    
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                        style={styles.button}
                        ref={(c) => this.sendBtn = c}>
                  <i className="material-icons">send</i>
                </button>
            </div>
        );
    }
}

const styles = {
    chatBox: {
        height: 75,
        width: 400,
        margin: '0 auto'
    },
    input: {
        height: '95%',
        width: '80%',
        float: 'left'
    },
    button: {
        position: 'relative',
        top: 10
    }
};

export default ChatInput;