
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

document.getElementById('msg-form').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()
    var message= document.getElementById('msg').value
    console.log(user_name +" >> " + message)
    saveMessages(user_name,message)
    document.getElementById('msg-form').reset()
}


const saveMessages = (user_name,message) => {
    var newMessage = messagesDB.push();
    newMessage.set({
        user_name: user_name,
        message:message
    }); 
};