import { WebSocket } from 'ws';

console.log("Connecting to the ASDFChat server...");

const connection = new WebSocket("wss://icetang0123.000webhostapp.com/");

connection.on("message", (msg) => {
    console.log(msg);
});

connection.on("open", () => {

});