// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});