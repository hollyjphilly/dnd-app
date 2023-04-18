import React from 'react';
import useWebSocket from 'react-use-websocket';
import { WS_URL, isUserEvent } from '../utilities';

export default function History() {
    const { lastJsonMessage } = useWebSocket(WS_URL, {
      share: true,
      filter: isUserEvent
    });
    const activities = lastJsonMessage?.data.userActivity || [];
    return (
        <details style={{cursor: 'pointer'}}>
          <summary>Activity</summary>
          {activities.map((activity, index) => <li key={`activity-${index}`}>{activity}</li>)}
        </details>
    );
  }