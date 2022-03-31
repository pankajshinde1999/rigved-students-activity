let express = require("express");
let app = express();
let http = require("http").Server(app);
let socketio = require("socket.io");
let io = socketio(http);
app.get("/", (request, response) => {
    response.sendFile(__dirname + '/act-index.html');
})

io.on('connection', (socket) => {
    console.log('user Online');
    socket.on('server-message', (msg) => {
        console.log("Message Recieved" + msg)
        socket.broadcast.emit("server-message-broadcasted", msg)
    })
});
http.listen(3005, () => console.log('server is running 3005'))
