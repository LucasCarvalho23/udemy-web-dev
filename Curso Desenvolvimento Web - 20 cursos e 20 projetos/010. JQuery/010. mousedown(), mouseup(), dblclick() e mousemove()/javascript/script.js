$(document).ready(
    () => {

        $("#onload").html("It's working")

        $(window).scroll( () => {
            $("#scroll").html("Scroll activeted")
        } )

        $(window).resize( () => {
            $("#resize").html("Resize working")
        } )


        $("#btn01").mousedown( () => {
            $("#containerMouse").css('background-color', 'blue')
        } )

        $("#btn01").mouseup( () => {
            $("#containerMouse").css('background-color', 'yellow')
        } )

        $("#btn02").dblclick( () => {
            $("#containerMouse").css('background-color', 'lightpink')
        } )

        $("#containerMouse").mousemove( (e) => {
            $("#resultContainer").html('X: ' + e.offsetX + ' Y: ' + e.offsetY);
        } )

    }
)
