const firebaseConfig = {
    apiKey: "AIzaSyC5xfAJzWDmBV0bB3veET-lRx-ggoNqJeY",
    authDomain: "picochat-7f8cb.firebaseapp.com",
    databaseURL: "https://picochat-7f8cb-default-rtdb.firebaseio.com",
    projectId: "picochat-7f8cb",
    storageBucket: "picochat-7f8cb.appspot.com",
    messagingSenderId: "393902846883",
    appId: "1:393902846883:web:22df8409ffa8659882e016",
    measurementId: "G-BS8QKL024W"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);
// reference to database
const messagesDB = firebase.database().ref('messages')
