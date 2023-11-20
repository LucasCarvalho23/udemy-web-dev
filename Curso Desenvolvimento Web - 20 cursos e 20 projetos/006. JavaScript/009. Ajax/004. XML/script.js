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
                console.log (this.XMLMovie)
                this.parser = new DOMParser()
                this.domFilms = this.parser.parseFromString(this.XMLMovie, 'text/xml')
       
                this.jsonMovies = xmlToJson(this.domFilms)

                console.log (this.domFilms)
                console.log ('')
                console.log (this.jsonMovies)

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