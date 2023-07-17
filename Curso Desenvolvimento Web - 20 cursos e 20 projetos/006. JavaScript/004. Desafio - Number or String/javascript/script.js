class Exercicio {

    constructor() {
        
        this.characterId = document.querySelector ("#character-id")
        this.buttonTesting = document.querySelector ("#button-testing-id")
        this.respostaContainer = document.querySelector ("#resposta-container-id")

        this.buttonTesting.addEventListener("click", () => {
            this.testingFunc()
        })

    }

    testingFunc() {
        this.characterValue = this.characterId.value 

        if (this.characterValue >= 0) {
            this.respostaContainer.innerHTML = `O caracter digitado é um(a) Number`
        } else {
            this.respostaContainer.innerHTML = `O caracter digitado é um(a) String`
        }

    }

}

const exercicio = new Exercicio()