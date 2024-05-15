const EventEmitter = require("events");
const emitter = new EventEmitter();

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
    
    this.emit("messageLogged", {
        id: 1,
        url: "http://"
    });

}




}

module.exports = Logger;