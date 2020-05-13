class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

     send(message, to) {
        this.room.send(message, this, to);
     }

     receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
     }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

const name1 = new User('Name1');
const name2 = new User('Name2');
const name3 = new User('Name3');

const room = new ChatRoom();

room.register(name1);
room.register(name2);
room.register(name3);

name1.send('Hello!', name2);
name2.send('Hi!', name3);
name3.send('Hi');