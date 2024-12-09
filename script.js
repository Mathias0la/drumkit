const container = document.querySelector("#container")

const drums = {
    clap: "q",
    hihat: "w",
    kick: "e",
    openhat: "r",
    ride: "a",
    snare: "s",
    tink: "d",
    tom: "f",
}

for (let key in drums){
    //Making the button
    const button = document.createElement("div")
    button.id = "drum"
    //Place image inside button
    const image = document.createElement("img")
    image.src = `./images/${key}.jpg`
    image.classList.add("image")
    //Make text for button
    const drumText = document.createElement("p")
    drumText.textContent = `${key[0].toUpperCase()}` + `${key.slice(1)}`
    drumText.classList.add("text")
    //Showing keyboard shortcuts to play sounds
    const keyboardInput = document.createElement("kbd")
    keyboardInput.textContent = drums[key].toUpperCase()
    keyboardInput.classList.add("keys")
    //Making event listener for clickable image
    image.addEventListener("click",() => {
        const audio = new Audio(`./sounds/${key}.wav`)
        audio.play()
    })
    //Appending elements to HTML
    button.append(image,keyboardInput,drumText)
    container.append(button)
}

//Adding event listener for keydown event
window.onkeydown = (event) => {
    
    for(let key in drums){
        if(event.key === drums[key]){
            const audio = new Audio(`./sounds/${key}.wav`)
            audio.play()
        }
}}


/*
window.addEventListener("keydown", (e) => {
    for(let key in drums){
        if(e.key === drums[key]){
            const audio = new Audio(`./sounds/${key}.wav`)
            audio.play()
        }
    }
})*/