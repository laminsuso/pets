class pet{
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

let p1 = new pet("sky", "dog", "black")
console.log(p1)