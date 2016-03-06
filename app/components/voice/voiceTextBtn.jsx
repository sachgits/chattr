import React, { Component, PropTypes } from 'react';

class VoiceTextBtn extends Component {
    componentDidMount() {
        this.btn.addEventListener('click', this.props.toggleSpeechRecognition);
    }
    
    render() {
        return (
            <div style={styles.voiceTextBtn}>
                <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                        ref={c => this.btn = c}>
                  <i className="material-icons">mic</i>
                </button>
            </div>
        );
    }
}

VoiceTextBtn.propTypes = {
    toggleSpeechRecognition: PropTypes.func.isRequired    
};

const styles = {
    voiceTextBtn: {
        position: 'absolute',
        left: '72%',
        top: '65%'
    }    
};

export default VoiceTextBtn;