$(document).ready(
    () => {

        $("#onload").html("It's working")

        $(window).scroll( () => {
            $("#scroll").html("Scroll activeted")
        } )

        $(window).resize( () => {
            $("#resize").html("Resize working")
        } )

    }
)
