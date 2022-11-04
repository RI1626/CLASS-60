import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBaY4dmXkbOtmkY_Zcuk33C-cNxhbzM66Q",
  authDomain: "wireless-buzzer-200bc.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-200bc-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-200bc",
  storageBucket: "wireless-buzzer-200bc.appspot.com",
  messagingSenderId: "1017950410819",
  appId: "1:1017950410819:web:9c2d98ca24357fdf011cf6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database()