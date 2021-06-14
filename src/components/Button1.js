import React from 'react';
import { subscribe } from 'mqtt-react';

export class PostMessage extends React.Component {

    sendMessage(e) {
        e.preventDefault();
        //MQTT client is passed on
        const { mqtt } = this.props;
        mqtt.publish('urgn/switch/left/control', 'ON');
    }

    render() {
        return (
            <button onClick={this.sendMessage.bind(this)}>
                OpenGarage
            </button>
        );
    }
}

export default subscribe({
    topic: 'urgn/switch/left/state'
})(PostMessage)
