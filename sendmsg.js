document.getElementById('msg-form').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()
    var message= document.getElementById('msg').value
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