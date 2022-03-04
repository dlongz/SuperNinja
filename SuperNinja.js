

class Ninja {
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    // log to the console the name of this Ninja instance
    sayName(){
        return console.log(this.name)
    }

    //  log to the console all 4 attributes of this Ninja instance
    showStats(){
        return console.log(`STATS:\nName: ${this.name},\nHealth: ${this.health},\nSpeed: ${this.speed},\nStrength: ${this.strength}`)
    }

    // Add 10 to this Ninja instance health attribute
    drinkSake(){
        this.health += 10
        return (console.log("Takes a drink of Sake. Health went up +10! Health: ", this.health))
    }

}

class Sensai extends Ninja {

    constructor(name){
        super(name, 200)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }

    speakWisdom(){
        this.drinkSake()
        return console.log("The Ways of the East will always be seen in the West!")
    }
}


const ninja1 = new Ninja('Dan', 100)
const superNinja1 = new Sensai('David')

ninja1.sayName() //.showStats().drinkSake().showStats()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()

superNinja1.sayName()
superNinja1.showStats()
superNinja1.drinkSake()
superNinja1.showStats()
superNinja1.speakWisdom()
superNinja1.showStats()
