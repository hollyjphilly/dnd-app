import React, { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginSection from './Login';
import Home from './components/Home'
import { WS_URL, USER_EVENT } from './utilities';

function App() {
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: (event) => console.log("Open", event, WS_URL),
    onClose: (event) => console.log("Close", event, WS_URL),
    onMessage: (event) => console.log("Message", event, WS_URL),
    onError: (event) => console.log("Error", event, WS_URL),
    share: true, // Don't create a new websocket every time, share the current socket on the server
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true, // Will attempt to reconnect on all close events, such as server shutting down
    reconnectAttempts: 2,
  });

  const [username, setUsername] = useState('');
  useEffect(() => {
    if(username && readyState === ReadyState.OPEN) {
      sendJsonMessage({
        username,
        type: USER_EVENT
      });
    }
  }, [username, sendJsonMessage, readyState]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {username ? <Home/> : <LoginSection onLogin={setUsername}/>}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#acbbd6', // blue light
    fontFamily: 'sans-serif',
    backgroundColor: '#0c1a30', // blue dark
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: { margin: 0 },
  currency: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  window: {
    backgroundColor: '#203558', // blue
    padding: '80px',
    paddingLeft: '60px',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: '#acbbd6', // blue light
    backgroundColor: '#182843', // blue mid dark
    border: 'none',
    height: '40px',
    paddingLeft: '8px',
    fontSize: '15px',
    width: '100%',
  },
  button: {
    backgroundColor: '#5c6f8e', // blue mid light
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    color: '#182843', // blue mid dark
    fontSize: '15px',
    fontWeight: '700',
    textAlign: 'left',
    marginRight: '160px',
    cursor: 'pointer',
  },
  disabledIcon: {
    color: '#5c6f8e', // blue mid light
  },
  enabledIcon: {
    color: '#acbbd6', // blue light
  }
});

export default App;

