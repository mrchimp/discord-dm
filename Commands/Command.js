class Command {
    constructor(client) {
        this.client = client;
    }
    
    run(msg) {
        console.log('Why are you using a base command? Override this method.');
    }
}

module.exports = Command;