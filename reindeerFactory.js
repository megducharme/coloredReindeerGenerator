
const reindeerColorGenerator = function* () {
    let colorArray = ["Blue", "Red", "Orange", "Purple", "Brown", "Aquamarine", "Goldenrod", "Azure", "Fuchsia", "Chocolate", "Amaranth"]
    let colorIndex = 0
    
    while (colorIndex < colorArray.length) {
        yield colorArray[colorIndex]
        colorIndex ++
    }
}

//create an instance of the color generator function to hold the current state
const reindeerColorFactory = reindeerColorGenerator()




// Factory function that returns a reindeer object when it is invoked with a name
const reindeerFactory = name => 
     Object.create(null, {
        "color": { value: reindeerColorFactory.next().value, enumerable: true },
        "name": { value: name, enumerable: true }
     })




// loop over the reindeer names, and pass them to the factory function to create colored reindeer
function colorReindeerArray(){
    var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    let coloredReindeer = []

    for(let i=0; i < reindeer.length; i++){
        coloredReindeer.push(reindeerFactory(reindeer[i]))
    }
    
    return coloredReindeer
    
}



//print reindeer to the DOM
let reindeerToDom = document.getElementsByClassName("reindeer")[0]

function reindeerToTheDOM(){
    const coloredReindeer = colorReindeerArray()
    
    for(let i = 0; i < coloredReindeer.length; i++){
        let currentReindeer = coloredReindeer[i]
        reindeerToDom.innerHTML += 
        `<p style="color: ${currentReindeer.color};"> ${currentReindeer.color} ${currentReindeer.name}</p>`
    }
}
reindeerToTheDOM();