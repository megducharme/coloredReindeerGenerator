let reindeerToDom = document.getElementsByClassName("reindeer")[0]

function reindeerToTheDOM(){
    for(let i = 0; i < coloredReindeer.length; i++){
        let currentReindeer = coloredReindeer[i]
        reindeerToDom.innerHTML += 
        `<p style="color: ${currentReindeer.color};"> ${currentReindeer.color} ${currentReindeer.name}</p>`
    }
}
