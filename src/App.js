import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {toast, ToastContainer} from "react-toastify";
import Message from "./Message/Message";
import "react-toastify/dist/ReactToastify.css";
import {getToken} from "firebase/messaging";
import {messaging} from "./firebase/firebaseConfig";
import {onMessage} from "firebase/messaging"
const VITE_APP_VAPID_KEY = 'BMM5FjJ5VG76kn2Me8q1UlPAFz93kMgybk0b3WT7tm99iNddaLJjMwKxJA-GunGTDEs2cxridHNGDND_G03waIs';

function App() {

    onMessage(messaging, (payload) => {
        toast(<Message notification={payload.notification}/>);
    });

    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                // ... Rest of the code ...
                <ToastContainer/>


            </header>
        </div>
    );
}


async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: VITE_APP_VAPID_KEY,
        });

        //We can send token to server
        console.log("Token generated : ", token);
    } else if (permission === "denied") {
        //notifications are blocked
        alert("You denied for the notification");
    }
}


export default App;
