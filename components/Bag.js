import React, { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { WS_URL, isBagEvent, CONTENT_EVENT } from '../utilities';
import Currency from '../components/Bag/Currency';
import Spacer from './Spacer';

export default function Bag() {
    const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
      share: true,
      filter: isBagEvent
    });
  
    let bagContent = lastJsonMessage?.data.bagContent || {};
    let { gold, copper, silver } = bagContent;
  
    function handleHtmlChange(fieldName, e) {
      sendJsonMessage({
        type: CONTENT_EVENT,
        content: {
          [fieldName]: e.target.value,
        }
      });
    }
  
    return (
      <div>
        <Currency 
          name = 'gold'
          value = {gold}
          icon = {require('../assets/gold.svg')}
          onChange = {(e) => { handleHtmlChange('gold', e) }}
        />
        <Spacer height = {'20px'}/>
        <Currency 
          name = 'silver'
          value = {silver}
          icon = {require('../assets/silver.svg')}
          onChange = {(e) => { handleHtmlChange('silver', e) }}
        />
        <Spacer height = {'20px'}/>
        <Currency 
          name = 'copper'
          value = {copper}
          icon = {require('../assets/copper.svg')}
          onChange = {(e) => { handleHtmlChange('copper', e) }}
        />
      </div>
    );
  }