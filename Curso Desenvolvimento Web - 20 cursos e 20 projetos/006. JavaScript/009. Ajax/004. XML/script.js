class Movie {

    constructor() {
       
        this.buttonSearch = document.querySelector ("#button-id")
        this.url = 'http://localhost/Ajax/filmes.xml'

        this.buttonSearch.addEventListener("click", () => {
            this.funcSearch()
        })

    }

    funcSearch() {
        this.xmlFiles = new XMLHttpRequest()
        this.xmlFiles.open('GET', this.url)

        this.xmlFiles.onreadystatechange = () => {
            if (this.xmlFiles.readyState == 4 && this.xmlFiles.status == 200) {
                this.XMLMovie = this.xmlFiles.responseText
                this.parser = new DOMParser()
                this.domFilms = this.parser.parseFromString(this.XMLMovie, 'text/xml')
       
                this.jsonMovies = xmlToJson(this.domFilms)

                for (this.count in this.jsonMovies['filmes']['filme']) {


                    this.item = this.jsonMovies['filmes']['filme'][this.count]

                    this.divRow = document.createElement('div')
                    this.divRow.className = 'row'

                    this.divCol = document.createElement('div')
                    this.divCol.className = 'col'

                    this.p1 = document.createElement('p')
                    this.p1.innerHTML = `<strong>Title: </strong> ${this.item['titulo']['#text']}`

                    this.p2 = document.createElement('p')
                    this.p2.innerHTML = `<strong>Resume: </strong> ${this.item['resumo']['#text']}`

                    this.gender = ''

                    for (this.g in this.item.genero) {
                        console.log (this.item.genero[this.g])
                    }

                    this.p3 = document.createElement('p')
                    this.p3.innerHTML = `<strong>Gender: </strong> ${this.gender}`

                    this.p4 = document.createElement('p')
                    this.p4.innerHTML = `<strong>Casting: </strong> ${this.item['titulo']['#text']}`

                    this.p5 = document.createElement('p')
                    this.p5.innerHTML = `<strong>Date: </strong> ${this.item['titulo']['#text']}`
                    
                    this.hr = document.createElement('hr')

                    this.divRow.appendChild(this.divCol)
                    this.divCol.appendChild(this.p1)
                    this.divCol.appendChild(this.p2)
                    this.divCol.appendChild(this.p3)
                    this.divCol.appendChild(this.p4)
                    this.divCol.appendChild(this.p5)
                    this.divCol.appendChild(this.hr)

                    document.querySelector("#container-list").appendChild(this.divRow)
                }


                /* 

                <div class = "row">
                    <div class = "col">
                        <p><strong>Title: </strong> Title for movie</p>
                        <p><strong>Resume: </strong> Resume for movie</p>
                        <p><strong>Gender: </strong> Gender for movie</p>
                        <p><strong>Casting: </strong> Casting for movie</p>
                        <p><strong>Date: </strong> Date for movie</p>
                    </div>
                </div>

                */
            }

            if (this.xmlFiles.readyState == 4 && this.xmlFiles.status == 404) {
                
            }
        }

        this.xmlFiles.send()
    }

}

const movie = new Movie()
