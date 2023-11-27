class App {

    constructor() {

        this.cepInput = document.querySelector ("#cep-input-id")

        this.cepInput.addEventListener("blur", () => {
            this.getDadosEndereco(this.cepInput.value)
        })

    }

    getDadosEndereco(cep) {
        this.url = 'https://viacep.com.br/ws/' + cep + '/json/'
        this.xmlHttp = new XMLHttpRequest()
        this.xmlHttp.open('GET', this.url)

        this.xmlHttp.onreadystatechange = () => {
            if (this.xmlHttp.readyState == 4 && this.xmlHttp.status == 200) {
                this.dateJSONText = this.xmlHttp.responseText
                this.dateJSONObj = JSON.parse(this.dateJSONText)

                document.querySelector("#address-input-id").value = `${this.dateJSONObj.logradouro}`
                document.querySelector("#neighborhood-input-id").value = `${this.dateJSONObj.bairro}`
                document.querySelector("#city-input-id").value = `${this.dateJSONObj.localidade}`
                document.querySelector("#uf-input-id").value = `${this.dateJSONObj.uf}`
            }
        }

        this.xmlHttp.send()
    }

}

const app = new App()