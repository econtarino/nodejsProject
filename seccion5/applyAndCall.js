var obj = {
    name: 'Eze',
    greet : function(){
        console.log(`Hola soy ${this.name}`)
    }
}


obj.greet();
obj.greet.call