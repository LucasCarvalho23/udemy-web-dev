class Ajax {

    constructor() {
        
        this.buttonPag01 = document.querySelector ("#button-pag01")
        this.buttonPag02 = document.querySelector ("#button-pag02")
        this.buttonPag03 = document.querySelector ("#button-pag03")

        this.buttonPag01.addEventListener("click", () => {
            this.requestPage('pagina_1_conteudo.php')
        })
        this.buttonPag02.addEventListener("click", () => {
            this.requestPage('pagina_2_conteudo.html')
        })
        this.buttonPag03.addEventListener("click", () => {
            this.requestPage('pagina_3_conteudo.html')
        })

    }

    requestPage(url) {

        if (!document.querySelector("#loading-id")) {
            this.imgLoading = document.createElement('img')
            this.imgLoading.id = 'loading-id'
            this.imgLoading.src = 'loading.gif'
            this.imgLoading.className = 'rounded mx-auto d-block'
    
            document.querySelector ("#content-id").appendChild(this.imgLoading)
        }

        this.ajaxContent = new XMLHttpRequest()
        console.log (this.ajaxContent.readyState)

        this.ajaxContent.open('GET', url)
        console.log (this.ajaxContent.readyState)

        this.ajaxContent.onreadystatechange = () => {
            if (this.ajaxContent.readyState == 4) {
                console.log ('Working')
                document.querySelector("#loading-id").remove()
            }
        }

        this.ajaxContent.send()


        //console.log (this.ajaxContent)
    }

}


const ajax = new Ajax()