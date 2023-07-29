class Challenger {

    constructor() {
        
        this.inputText = document.querySelector ("#input-text-id")
        this.buttonAdd = document.querySelector ("#button-add-id ")
        this.buttonSort = document.querySelector ("#button-sort-id ")
        this.totalValue = []
        this.count = 0
        this.typeVar = ''
        this.LastTypeVar = ''

        this.buttonAdd.addEventListener ("click", ()=> {
            this.functionAdd()
        })

        this.buttonSort.addEventListener ("click", ()=> {
            this.functionSort()
        })

    }


    funcTest() {

        this.inputTextTest = this.inputText.value - this.inputText.value

        if (this.inputTextTest == 0) {
            this.typeVar = 'number'
        } else {
            this.typeVar = 'string'
        }

    }
    

    functionAdd() {
        
        this.funcTest()

        if (this.count >= 0) {

            if (this.inputText.value == '') {
                alert ("Error. Insert the char on the field")
            } else if (this.totalValue.indexOf(this.inputText.value) !== -1) {
                alert ("Character / Number already added")
                document.querySelector ("#input-text-id").value = ''
            } else if ((this.typeVar != this.LastTypeVar) && (this.LastTypeVar != '') ) {
                alert ("Differents types. Insert the correct character")
                document.querySelector ("#input-text-id").value = ''
            } else {
                this.totalValue[this.count] = this.inputText.value
                this.count++
                console.log (this.totalValue)
                this.LastTypeVar = this.typeVar
                document.querySelector ("#input-text-id").value = ''
            }

        }


    }

    functionSort() {

        if (this.LastTypeVar == 'string') {
            console.log (this.totalValue.sort())
            this.totalValue = []
            this.typeVar = ''
            this.LastTypeVar = ''
            this.count = 0
        } else if (this.LastTypeVar == 'number') {   
            console.log (this.totalValue.sort(this.functionSortNumbers))
            this.totalValue = []
            this.typeVar = ''
            this.LastTypeVar = ''
            this.count = 0
        }
    }


    functionSortNumbers(number1, number2) {
        return number1 - number2
    }

}

const challenger = new Challenger()