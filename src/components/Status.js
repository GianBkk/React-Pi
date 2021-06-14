import React from 'react'
import { useSubscription } from 'mqtt-react-hooks';

const Status = () => {

    //const { message } = useSubscription('urgn/switch/left/state');
    const {message} = 'ON'

    if(message === 'ON'){
        var state = 'Open';
    }else{
        var state = 'Closed';
    }

    return (
        <div className='text-wrapper'>
            <div className='state-text'>
                {`The Garage is Currently ${state}`}
            </div>
        </div>
    )
}

export default Status
