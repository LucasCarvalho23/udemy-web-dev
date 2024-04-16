$(document).ready(
    () => {

        $("#teclado").keydown( () => {
            $("#resultadoTeclado").html("Tecla pressionada")
        })

        $("#teclado").keyup( (e) => {
            $("#resultadoTeclado").html("Tecla liberada")
            console.log(e.keyCode)
        })

    }
)

