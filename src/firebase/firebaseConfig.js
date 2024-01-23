
import { initializeApp } from "firebase/app";
import {getMessaging} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA1J7Jga3G5Ya0jY_hbN-7EykTQN_pL2XY",
    authDomain: "test-33f42.firebaseapp.com",
    projectId: "test-33f42",
    storageBucket: "test-33f42.appspot.com",
    messagingSenderId: "414982161235",
    appId: "1:414982161235:web:217457ebaef0e1083897a6",
    measurementId: "G-VGM3LG3W99"
};


// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

