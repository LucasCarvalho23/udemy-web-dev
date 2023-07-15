class Calculator {

    constructor() {

        this.inputDate = document.querySelector ("#input-date-id")
        this.inputSecondDate = document.querySelector ("#input-seconddate-id")
        this.buttonCalc = document.querySelector ("#button-calc-id")
        this.divResponse = document.querySelector ("#p-div-response")

        this.buttonCalc.addEventListener ("click", () => {
            this.clickEventButton()
        })

    }

    clickEventButton() {

        this.dateValue = new Date (this.inputDate.value)
        this.firstDateValue = this.dateValue.getTime()
        this.secondDateValue = new Date (this.inputSecondDate.value)
        this.secDateValue = this.secondDateValue.getTime()

        this.finalResult = Math.abs(this.firstDateValue - this.secDateValue)
        this.finalResult = this.finalResult / 1000 / 60 / 60 / 24

        this.divResponse.innerHTML = `São ${this.finalResult} dias de diferença entre as datas selecionadas.`

    }

}

const calculator = new Calculator()