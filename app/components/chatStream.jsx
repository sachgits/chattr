import React, { PropTypes } from 'react';

import ChatMessage from './chatMessage.jsx';

class ChatStream extends React.Component {
    render() {
        const chatMessages = this.props.messages.map((message, index) => {
            return (<ChatMessage message={message} key={index} />);  
        });
        return (
            <div style={styles.chatStream}>
                {chatMessages}
            </div>    
        );
    }
}

ChatStream.propTypes = {
    messages: PropTypes.array.isRequired    
};

const styles = {
    chatStream: {
        height: 500,
        width: 400,
        border: '2px solid #F44336',
        margin: '0 auto',
    }
}

export default ChatStream;