// NotificationComponent.js

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'; // Import Firebase
import { getMessaging, getToken } from "firebase/messaging";

const NotificationComponent = () => {
    const [registrationToken, setRegistrationToken] = useState('');

    useEffect(() => {

        // Retrieve the FCM registration token when the component mounts
        const getRegistrationToken = async () => {
            try {
               getToken( getMessaging(),{ vapidKey: 'BMM5FjJ5VG76kn2Me8q1UlPAFz93kMgybk0b3WT7tm99iNddaLJjMwKxJA-GunGTDEs2cxridHNGDND_G03waIs' }).then((currentToken) => {
                    if (currentToken) {
                        console.log(currentToken)
                        setRegistrationToken(currentToken);

                        // Send the token to your server and update the UI if necessary
                        // ...
                    } else {
                        // Show permission request UI
                        console.log('No registration token available. Request permission to generate one.');
                        // ...
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                    // ...
                });
            } catch (error) {
                console.error('Error getting FCM registration token:', error);
            }
        };

        getRegistrationToken();

    }, []);

    return (
        <div>
            <h2>Firebase Cloud Messaging Registration Token</h2>
            {registrationToken ? (
                <div>
                    <p>Token: {registrationToken}</p>
                    <p>You can use this token to send push notifications to this device.</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            {/* Add additional UI components or buttons as needed */}
        </div>
    );
};

export default NotificationComponent;
