export const WS_URL = 'ws://localhost:8080/';
// export const WS_URL = 'wss://dnd-server.azurewebsites.net/';

export const USER_EVENT = 'USER_EVENT';
export const CONTENT_EVENT = 'CONTENT_EVENT';

export function isUserEvent(message) {
    let evt = JSON.parse(message.data);
    return evt.type === USER_EVENT;
}
  
export function isBagEvent(message) {
    let evt = JSON.parse(message.data);
    return evt.type === CONTENT_EVENT;
}