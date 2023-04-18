import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { WS_URL } from './utilities';
import { TextInput, Button, Avatar } from 'react-native';
import Spacer from './components/Spacer'

import { styles } from './App.js';

export default function LoginSection({ onLogin }) {
  const [username, setUsername] = useState('');

  useWebSocket(WS_URL, {
    share: true,
    filter: () => false
  });

  function logInUser() {
    if(!username.trim()) {
      return;
    }
    onLogin && onLogin(username);
  }

  return (
    <div style={styles.window}>
      <h1 style={styles.h1}>Bag of Holding</h1>
      <Spacer height={'40px'}/>
      <TextInput 
        style={styles.input}
        name='username'
        placeholder='Enter character name.'
        placeholderTextColor='#354b6e'
        onChange={(e) => setUsername(e.target.value)}
        />
        <Spacer height={'20px'}/>
      <Button 
        style={styles.button}
        title='Join the Party'
        onPress={logInUser}
        color='#5c6f8e'
        accessibilityLabel='Join the Party'
      />
    </div>
  );
  }