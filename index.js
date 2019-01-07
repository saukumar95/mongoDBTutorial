var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/iConnect', { useNewUrlParser: true }, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to mongodb');
    }
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});


var personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

var Person = mongoose.model('Person', personSchema);


var user = new Person({
    name: 'Saurabh',
    age: 23
});

console.log(user.name, user.age);

personSchema.methods.speak = function () {
    var greeting = this.name
        ? `My name is ${this.name} and age is ${this.age}`
        : "I don't have a name and age";
    console.log(greeting);
}

var Person = mongoose.model('Peson', personSchema);

var newuser = new Person({
    name: 'Alexa',
    age: 22
});

newuser.save(function (err, newuser) {
    if (err) return console.error(err);
    newuser.speak();
});


Person.find(function (err, person) {
    if (err) return console.error(err);
    console.log(person);
});


newuser.speak();



Person.find({ name: /^exa/ });