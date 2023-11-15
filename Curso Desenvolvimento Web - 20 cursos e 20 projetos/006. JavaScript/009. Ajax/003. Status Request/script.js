class Ajax {

    constructor() {
        
        this.buttonPag01 = document.querySelector ("#button-pag01")
        this.buttonPag02 = document.querySelector ("#button-pag02")
        this.buttonPag03 = document.querySelector ("#button-pag03")

        this.buttonPag01.addEventListener("click", () => {
            this.requestPage('pagina_1_conteudo.php')
        })
        this.buttonPag02.addEventListener("click", () => {
            this.requestPage('pagina_5_conteudo.php')
        })
        this.buttonPag03.addEventListener("click", () => {
            this.requestPage('pagina_3_conteudo.php')
        })

    }

    requestPage(url) {

        document.querySelector ("#content-id").innerHTML = ``

        if (!document.querySelector("#loading-id")) {
            this.imgLoading = document.createElement('img')
            this.imgLoading.id = 'loading-id'
            this.imgLoading.src = 'loading.gif'
            this.imgLoading.className = 'rounded mx-auto d-block mt-5'
            this.imgLoading.style = 'width: 50px'
    
            document.querySelector ("#content-id").appendChild(this.imgLoading)
        }

        this.ajaxContent = new XMLHttpRequest()
        this.ajaxContent.open('GET', url)
       
        this.ajaxContent.onreadystatechange = () => {
            if ((this.ajaxContent.readyState == 4) && (this.ajaxContent.status == 200)) {
                document.querySelector ("#content-id").innerHTML = `${this.ajaxContent.responseText}`
            } else if  ((this.ajaxContent.readyState == 4) && (this.ajaxContent.status == 404)) {
                document.querySelector ("#content-id").innerHTML = `Object is not found. Status: ${this.ajaxContent.status}`
            }
        }

        this.ajaxContent.send()

    }

}


const ajax = new Ajax()