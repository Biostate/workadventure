import { PUSHER_URL, WEBSOCKET_URL } from "./EnvironmentVariable";

export const ABSOLUTE_PUSHER_URL = new URL(PUSHER_URL, window.location.toString()).toString();
export const ABSOLUTE_WEBSOCKET_URL = WEBSOCKET_URL
    ? new URL(WEBSOCKET_URL, window.location.toString()).toString()
    : ABSOLUTE_PUSHER_URL;
