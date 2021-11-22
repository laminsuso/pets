const Dog = require('./dog')
class Pet{
    static pets =[]
    constructor(name, species, color){
        this.name = name
        this.species = species
        this.color = color
    }

    changeName(name){
        this.name = name
    }
}

let p1 = new Pet("sky", "dog", "black")
console.log(p1)
module.exports = Pet