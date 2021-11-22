const Pet = require('./pets')
class Dog extends Pet{
    constructor(name, type, color,breed){
        super(name,type,color)
        this.breed = breed
    }

    bark(sound){
        return 'this dog goes ${sound}'
    }
}

let d1 = new Dog('deepSea', 'dog', 'black', 'Africanlion')

console.log(d1)