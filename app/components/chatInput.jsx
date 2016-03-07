import React from 'react';
import VoiceTextBtn from './voice/voiceTextBtn.jsx';
import { parseMessage } from '../utilities/messageParser.js';

class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            speechRec: new webkitSpeechRecognition(),
            speechIsRunning: false
        }
        
        this.setUpSpeechRecognition(this.state.speechRec);
        this.toggleSpeechRecognition = this.toggleSpeechRecognition.bind(this);
    }
    
    setUpSpeechRecognition(speechRec) {
        speechRec.continuous = true;
        speechRec.interimResults = true;
        speechRec.onstart = () => {
            console.log('Speech recognition started');
        };
        speechRec.onerror = (event) => {
            console.log("onerror", event);
        };
        speechRec.onend = (event) => {
            console.log('Speech Recognition stopped');    
            this.setState({ speechIsRunning: false });
        };
        speechRec.onresult = this.handleSpeechInput.bind(this);
    }
    
    handleChatInput() {
        const chatBody = this.input.value;
        const parsedInput = parseMessage(chatBody);
        
        console.log(parsedInput);
        this.props.sendChatMessage(parsedInput);
        this.input.value = '';
    }
    
    handleSpeechInput(event) {
        for (let i = event.resultIndex; i < event.results.length; ++i) {      
            this.input.value = event.results[i][0].transcript;
        }
    }
    
    toggleSpeechRecognition() {
        if(this.state.speechIsRunning) {
            this.state.speechRec.stop();
            this.setState({ speechIsRunning: false });
        } else {
            this.state.speechRec.start();
            this.setState({ speechIsRunning: true });
        }
    }
    
    componentDidMount() {
        this.sendBtn.addEventListener('click', this.handleChatInput.bind(this));
    }
    
    render() {
        return (
            <div style={styles.chatBox}>
                <VoiceTextBtn toggleSpeechRecognition={this.toggleSpeechRecognition} />
                <textarea id="chatInput"
                    ref={(c) => this.input = c}
                    style={styles.input}>
                </textarea>
                    
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
        margin: '0 auto',
        position: 'relative'
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