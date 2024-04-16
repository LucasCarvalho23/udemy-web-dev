$(document).ready(
    () => {

    /*
        $("#containerExterno").mouseover( () => {
            $("#resultDiv").html('Its working')
        }) 

        $("#containerExterno").mouseout( () => {
            $("#resultDiv").html("Out")
        })

    */

        $("#containerExterno").mouseenter( () => {
            $("#resultDiv").html('Inside')
        })


        $("#containerExterno").mouseleave( () => {
            $("#resultDiv").html("Outside")
        })


    }
)


