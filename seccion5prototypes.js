var EventEmitter = require ('events');
var util = require('util')


function Greetr(){
    this.greeting= 'Hello World';
}

util.inherits(Greetr,EventEmitter)

Greetr.prototype.greet = function(){
    console.log(this.greeting)
    this.emit('greet');
}
Greetr.prototype.saludar2 = function(){
    console.log('Estoy saludando ')
    this.emit('saludar2');
}

var greet1 = new Greetr();

greet1.on('greet', function(){
    console.log('Someone greeted')
})


greet1.greet();
var greet2 = new Greetr();
greet2.on('saludar2',function(){
    console.log('No hace falta que me saludes 2 veces muchaho ')
})
greet2.saludar2();