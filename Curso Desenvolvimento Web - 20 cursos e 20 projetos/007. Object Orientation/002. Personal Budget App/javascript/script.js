class PersonalBudgetApp {

    constructor() {

        this.expensive = {}
        
        this.enteredYear = document.querySelector ("#ano")
        this.enteredMounth = document.querySelector ("#mes")
        this.enteredDay = document.querySelector ("#dia")
        this.enteredType = document.querySelector ("#tipo")
        this.enteredDescrition = document.querySelector ("#descricao")
        this.enteredValue = document.querySelector ("#valor")

        this.modalLabel = document.querySelector ("#modalLabel-id")
        this.descriptionModal = document.querySelector ("#description-modal-id")

        this.buttonAdd = document.querySelector ("#button-add-id")
        this.buttonSearch = document.querySelector ("#button-search-id")
        this.buttonModal = document.querySelector ("#button-modal-id")
        this.buttonSearch = document.querySelector ("#button-search-id")

        this.containerSearch = document.querySelector ("#container-search-id")
    

        this.buttonAdd.addEventListener ("click", () => {
            this.expensiveFunc() // Transform to object the values
        })

        this.buttonSearch.addEventListener ("click", () => {
            this.queryFunc() 
        })

    }

    // Button to list the values on query
    queryFunc() {
        this.finalValueQuery = dataBase.retrieveAllRecords()
        console.log (this.finalValueQuery)

        this.yearValue = this.enteredYear.value
        this.mounthValue = this.enteredMounth.value

        if (this.yearValue.length != 0) {
            this.finalValueQuery.filter( d => d[0] == this.yearValue)
            this.finalValueQuery.filter( d => d[1] == this.mounthValue)

            for (this.count = 0; this.count < this.finalValueQuery.length; this.count++) {
                this.lineRow = this.containerSearch.insertRow()
    
                this.lineRow.insertCell(0).innerHTML = `${this.finalValueQuery[this.count][0]}/${this.finalValueQuery[this.count][1]}/${this.finalValueQuery[this.count][2]}`
                
                switch (this.finalValueQuery[this.count][3]) {
                    case '1': this.lineRow.insertCell(1).innerHTML = `Alimentação`
                        break
                    case '2': this.lineRow.insertCell(1).innerHTML = `Educação`
                        break
                    case '3': this.lineRow.insertCell(1).innerHTML = `Lazer`
                        break
                    case '4': this.lineRow.insertCell(1).innerHTML = `Saúde`
                        break
                    case '5': this.lineRow.insertCell(1).innerHTML = `Transporte`
                        break
    
                }
    
                this.lineRow.insertCell(2).innerHTML = `${this.finalValueQuery[this.count][4]}`
                this.lineRow.insertCell(3).innerHTML = `${this.finalValueQuery[this.count][5]}`
            }
        }
    

    // View the values insered on the table
        /*  
        this.finalValueQuery.forEach(function(value) {
            console.log (value)
        })
        */
                

    }

    // Validation
    validateData() {
        for (this.i in this.expensive) {
            if (this.expensive[this.i] == undefined || this.expensive[this.i] == '' || this.expensive[this.i] == null) {
                return false
            }
        }
        return true 
    }

    // Transform to object the values
    expensiveFunc() {
        this.expensive[0] = this.enteredYear.value 
        this.expensive[1] = this.enteredMounth.value 
        this.expensive[2] = this.enteredDay.value
        this.expensive[3] = this.enteredType.value
        this.expensive[4] = this.enteredDescrition.value
        this.expensive[5] = this.enteredValue.value

        if (this.validateData()) {
            dataBase.saveLocalFunc(this.expensive)
            $('#error-record-id').modal('show')
            this.modalLabel.innerHTML = `Saved successfully`
            this.modalLabel.style.color = "green" 
            this.descriptionModal.innerHTML = `Successfully saved data.`
            this.buttonModal.style.backgroundColor = "green"
            this.buttonModal.style.color = "white"
            this.clearFilds()
        } else {
            $('#error-record-id').modal('show') 
            this.modalLabel.innerHTML = `Recording Error`
            this.modalLabel.style.color = "red"
            this.descriptionModal.innerHTML = `There are required fields that have not been completed.`
            this.buttonModal.style.backgroundColor = "red"
            this.buttonModal.style.color = "white"
        }
    }

    // Clear fields
    clearFilds() {
        this.enteredYear.value = ''
        this.enteredMounth.value = ''
        this.enteredDay.value = ''
        this.enteredType.value = ''
        this.enteredDescrition.value = ''
        this.enteredValue.value = ''
    }

}


class DataBase {
    
    constructor() {

        this.id = localStorage.getItem('id')

        if (this.id === null) {
            localStorage.setItem('id', 0)
        }

    }

    saveLocalFunc(value) {
        this.finalId = this.getNextId()
        localStorage.setItem(this.finalId,JSON.stringify(value))
        localStorage.setItem('id',this.finalId)
    }

    getNextId() {
        this.nextId = localStorage.getItem('id')
        return parseInt(this.nextId) + 1
    }

    retrieveAllRecords() {
        this.idRecovered = localStorage.getItem('id')
        this.arrayExpensive = Array()

        for (this.countId = 1; this.countId <= this.idRecovered; this.countId++) {
            
            this.expensiveId = JSON.parse (localStorage.getItem(this.countId))

            if (this.expensiveId === null) {
                continue
            }

            this.arrayExpensive.push(this.expensiveId)
        }

        return this.arrayExpensive
        
    }

} 

let dataBase = new DataBase()
let personalBudgetApp = new PersonalBudgetApp() 







