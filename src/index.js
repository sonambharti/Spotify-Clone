import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import { DataLayer } from './Components/DataLayer';
import reducer, { initialState } from './Components/reducer';

// import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
        <App />
    </DataLayer>
 </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// serviceWorker.unregister();