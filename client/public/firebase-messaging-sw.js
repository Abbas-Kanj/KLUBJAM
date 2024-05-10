// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCLj8Wp5cgRvYwtMT3d9t1SB3mRteBf57o",
  authDomain: "klubjam-23c23.firebaseapp.com",
  projectId: "klubjam-23c23",
  storageBucket: "klubjam-23c23.appspot.com",
  messagingSenderId: "1031035180250",
  appId: "1:1031035180250:web:0f89e76d3600ac3c7281e3",
  measurementId: "G-DTZK08NKXT",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
