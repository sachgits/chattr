import React from 'react';
import io from 'socket.io-client';

class ChatStream extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            socket: null    
        };
    }
    
    
    componentDidMount() {
        const socket = io();
        
        socket.on('messageReceived', (message) => {
           console.log(message); 
        });
        
        this.setState({ socket });
    }
    
    render() {
        return (
            <div style={styles.chatStream}>
            
            </div>    
        );
    }
}

const styles = {
    chatStream: {
        height: 500,
        width: 400,
        border: '2px solid #F44336',
        margin: '0 auto',
    }
}

export default ChatStream;