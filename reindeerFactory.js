var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
let coloredReindeer = []

// A generator that never ends!
const reindeerColorGenerator = function* () {
    let colorArray = ["Blue", "Red", "Orange", "Purple", "Brown", "Aquamarine", "Goldenrod", "Azure", "Fuchsia", "Chocolate", "Amaranth"]
    let colorIndex = 0

    while (colorIndex < colorArray.length) {
        yield colorArray[colorIndex]
        colorIndex ++
    }
}

const reindeerColorFactory = reindeerColorGenerator()

// Factory function that returns a reindeer object
const reindeerFactory = function (name) {
    return Object.create(null, {
        "color": { value: reindeerColorFactory.next().value, enumerable: true },
        "name": { value: name, enumerable: true }
    })
}

function colorReindeerArray(){
    for(let i=0; i < reindeer.length; i++){
        coloredReindeer.push(reindeerFactory(reindeer[i]))
    }
    reindeerToTheDOM();
}
colorReindeerArray()