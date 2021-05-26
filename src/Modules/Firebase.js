import firebase from "firebase"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_FBKEY,
    authDomain: "eindopdrachtnovimaarten.firebaseapp.com",
    databaseURL: "https://eindopdrachtnovimaarten-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "eindopdrachtnovimaarten",
    storageBucket: "eindopdrachtnovimaarten.appspot.com",
    messagingSenderId: process.env.REACT_APP_API_FBMSG,
    appId: process.env.REACT_APP_API_FBAPPID,
    measurementId: process.env.REACT_APP_API_FBMEAS,

});
export default app;