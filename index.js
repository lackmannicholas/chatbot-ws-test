const WebSocket = require("ws");

//This will open the connection*
ws = new WebSocket("ws://localhost:8080", { handshakeTimeout: 5000}); 

try {
    // Then you can send a message
    ws.onopen = function () {
        ws.send(JSON.stringify({ message: "Ping", event: "connected" }));
    };
            
    //Log the messages that are returned from the server
    ws.onmessage = function (e) {
        console.log("From Server:"+ e.data)
    };
}
catch (e) {
    //Close the connection
    ws.close()
}
// //Sending a simple string message
// ws.send("HelloHelloIsThereAnyoneThere");

        
