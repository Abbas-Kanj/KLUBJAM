importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCLj8Wp5cgRvYwtMT3d9t1SB3mRteBf57o",
  authDomain: "klubjam-23c23.firebaseapp.com",
  projectId: "klubjam-23c23",
  storageBucket: "klubjam-23c23.appspot.com",
  messagingSenderId: "1031035180250",
  appId: "1:1031035180250:web:0f89e76d3600ac3c7281e3",
  measurementId: "G-DTZK08NKXT",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
