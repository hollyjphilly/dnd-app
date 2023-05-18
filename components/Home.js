import React from 'react';
import useWebSocket from 'react-use-websocket';
import { WS_URL, isUserEvent } from '../utilities';
import Users from './Users';
import History from './History';
import Bag from './Bag';
import Spacer from './Spacer';

import { styles } from '../App.js';

export default function Home() {
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isUserEvent
    });

    return (<div style={styles.window}>
        <Users users={Object.values(lastJsonMessage?.data?.users || {})}/>
        <Spacer height={'20px'}/>
        <h2 style={styles.h2}>Bag of Holding</h2>
        <Spacer height={'20px'}/>
        <Bag/>
        <Spacer height={'20px'}/>
        <History/>
    </div>);
}