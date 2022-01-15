import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById('root'));

type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
    timeout: number;
};
type RequestIdleCallbackDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: () => number;
};

declare global {
    interface Window {
        requestIdleCallback: (
            callback: (deadline: RequestIdleCallbackDeadline) => void,
            opts?: RequestIdleCallbackOptions
        ) => RequestIdleCallbackHandle;
        cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
    }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
