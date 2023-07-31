let heightValue = 0
let widthValue = 0
let lifes = 1
let time = 10
let createMosquito = 1500
let nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel == "easy") {
    createMosquito = 1500
} else if (nivel == "normal") {
    createMosquito = 1000
} else if (nivel = "hard") {
    createMosquito = 750
}

infoNumber()
positionRandom()
intervaloFunc()


function infoNumber() {
    heightValue = window.innerHeight
    widthValue = window.innerWidth
    console.log (heightValue, widthValue)
}

let stopwatch = setInterval(function() {
    
    time-=1

    if (time < 0) {
        clearInterval(stopwatch)
        window.location.href = "winGame.html"
    } else {
    document.querySelector ("#span-stopwatch-id").innerHTML = `${time}`
    }

},1000)

function positionRandom() {

    if (document.querySelector ("#mosquito-id")) {
        document.querySelector ("#mosquito-id").remove()

        if (lifes > 3) {
            window.location.href = "endGame.html"
        } else {
            document.querySelector ("#life"+lifes).src = "../image/coracao_vazio.png"
        lifes++
        }
    }

    let positionX = Math.floor(Math.random() * widthValue) - 90
    let positionY = Math.floor(Math.random() * heightValue) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log (positionX, positionY)


    // Create img element
    let moscaImg = document.createElement('img')
    moscaImg.src = "../image/mosca.png"
    moscaImg.className = randomSize() + ' ' + randomSide()
    moscaImg.style.left = positionX + 'px'
    moscaImg.style.top = positionY + 'px'
    moscaImg.style.position = 'absolute'
    moscaImg.id = "mosquito-id"

    moscaImg.addEventListener("click", ()=> {
        document.querySelector ("#mosquito-id").remove()
    })

    document.body.appendChild(moscaImg)

}

function randomSize() {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
    
}

function randomSide() {
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'side1'
        case 1:
            return 'side2'
    }
    
}

function intervaloFunc() {
    setInterval(function() {
        positionRandom()
    },createMosquito)
}



