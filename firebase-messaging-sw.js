// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyBbrrmhQh5nTd51VS-WL0BESv7AO_LL8L8",
  authDomain: "fir-push-pwa.firebaseapp.com",
  projectId: "fir-push-pwa",
  storageBucket: "fir-push-pwa.appspot.com",
  messagingSenderId: "168056633452",
  appId: "1:168056633452:web:6faaa0c0fd93da8d114049"

});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
