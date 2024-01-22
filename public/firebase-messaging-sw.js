importScripts('https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyA1J7Jga3G5Ya0jY_hbN-7EykTQN_pL2XY",
    authDomain: "test-33f42.firebaseapp.com",
    projectId: "test-33f42",
    storageBucket: "test-33f42.appspot.com",
    messagingSenderId: "414982161235",
    appId: "1:414982161235:web:217457ebaef0e1083897a6",
    measurementId: "G-VGM3LG3W99"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message', payload);
    // Customize the way you handle the notification when the app is in the background or closed
});

