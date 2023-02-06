
var msgBox= document.getElementById("message-box")
function getAllData() {
    messagesDB.on("child_added", function(data, prevChildKey) {
        var row = data.val();
        msgBox.innerHTML += "<p>"+ row.user_name+" >> " + row.message + "<p>";
        msgBox.scrollTop = msgBox.scrollHeight;
     });
}
getAllData()