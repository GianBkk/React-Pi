import React from 'react'
import { useMqttState, useSubscription } from 'mqtt-react-hooks';

const Button = () => {

    const { client } = useMqttState();
    const state = useSubscription('urgn/switch/left/state')

    function handleClick(message) {
        if(message === 'ON'){
            return client.publish('urgn/switch/left/control', message);
        } else {
            return client.publish('urgn/switch/left/control', 'OFF');  
        }
      }
    if(state.message === 'ON'){
        var status = 'Close Garage';
    } if else(state.message === 'OFF'){
        var status = 'Open Garage';
    }else{
        var status = 'Set Garage'
    }

    return (
        <div className="btn">
            <button className='btn-btn' type="button" onClick={() => handleClick(state.message)} value={status} />
                
            
        </div>
    )
}

export default Button
