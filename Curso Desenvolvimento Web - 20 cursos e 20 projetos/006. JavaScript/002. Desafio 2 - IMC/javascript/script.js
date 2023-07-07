class Desafio {

    constructor() {
        
        this.nameId = document.querySelector ("#name-id")
        this.heightId = document.querySelector ("#height-id")
        this.weightId = document.querySelector ("#weight-id")

        this.sendButton = document.querySelector ("#send-button-id")

        this.sendButton.addEventListener("click", () => {
            
            this.heightValue = this.heightId.value / 100
            this.weightValue = this.weightId.value
            this.result = "Uncalculed"
            this.resultP = document.querySelector ("#p-result-id")

            this.corporalMass = this.weightValue / (this.heightValue * this.heightValue)

            if (this.corporalMass < 16) {
                this.result = "Low weight. Very serious"
            } else if (this.corporalMass >= 16 && this.corporalMass < 16.99) {
                this.result = "Low weight. Serious"
            } else if (this.corporalMass >= 17 && this.corporalMass < 18.49) {
                this.result = "Low weight."
            } else if (this.corporalMass >= 18.5 && this.corporalMass < 24.99) {
                this.result = "Normal weight."
            } else if (this.corporalMass >= 25 && this.corporalMass < 29.99) {
                this.result = "Overweight."
            } else if (this.corporalMass >= 30 && this.corporalMass < 34.99) {
                this.result = "Obesity Level 1."
            } else if (this.corporalMass >= 35 && this.corporalMass < 39.99) {
                this.result = "Obesity Level 2."
            } else if (this.corporalMass >= 40) {
                this.result = "Obesity Level 3."
            }

            this.resultP.innerHTML += `${this.nameId.value} has a body mass index equal to ${this.corporalMass.toFixed(2)}, being classified as: ${this.result}`

        })
    }

}

const desafio = new Desafio()
