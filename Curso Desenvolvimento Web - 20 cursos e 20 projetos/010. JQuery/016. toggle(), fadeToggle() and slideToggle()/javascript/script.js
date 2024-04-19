$(document).ready(
    () => {

        $("#btn01").on("click", ()=> {
            $("#div01").toggle('slow')
        })

        $("#btn02").on("click", ()=> {
            $("#div02").fadeToggle(2000)
        })

        $("#btn03").on("click", ()=> {
            $("#div03").slideToggle('slow')
        })

    }
)