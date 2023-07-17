class PseudoCalc {

    constructor() {
        
        this.number1Id = document.querySelector ("#number1-id")
        this.number2Id = document.querySelector ("#number2-id")
        this.signId = document.querySelector ("#sign-id")
        this.pContainer = document.querySelector ("#p-container-id")
        this.buttonCalcular =document.querySelector ("#button-calcular-id")

        this.buttonCalcular.addEventListener ("click", () => {
            this.calcularFunc()
        })
    
    }

    calcularFunc() {
        this.number1Value = Number(this.number1Id.value) 
        this.number2Value = Number(this.number2Id.value )
        this.signValue = this.signId.value

        if (this.signValue == "+") {
            this.totalCalc = (this.number1Value + this.number2Value)
            this.pContainer.innerHTML = `The result is: ${this.totalCalc}`
        } else if (this.signValue == "-") {
            this.totalCalc = (this.number1Value - this.number2Value)
            this.pContainer.innerHTML = `The result is: ${this.totalCalc}`
        } else {
            alert ("Error. Insert the correct signal: + or -")
        }
    }
    

}

const pseudoCalc = new PseudoCalc()