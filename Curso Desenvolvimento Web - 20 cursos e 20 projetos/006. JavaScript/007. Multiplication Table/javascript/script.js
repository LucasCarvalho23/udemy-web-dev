class MultTable {

    constructor() {
        
        this.numberInput = document.querySelector ("#number-input-id")
        this.buttonCalculate = document.querySelector ("#button-calculate-id")
        this.containerResult = document.querySelector ("#container-result-id")

        this.buttonCalculate.addEventListener ("click", ()=> {
            this.sendNumber()
        })

    }

    sendNumber() {
        this.numberValue = this.numberInput.value
        this.containerResult.innerHTML = ``
        
        for (this.count = 0; this.count <= 10; this.count++) {
            this.containerResult.innerHTML += `${this.numberValue} x ${this.count} = ${this.numberValue * this.count} <br>`
        }

        document.querySelector ("#number-input-id").value = ``

    }

}

const multTable = new MultTable()