$(document).ready(
    () => {

        $("#btn02").on("click", ()=> {
            alert("BTN02 clicked")
        })

        $("#btn01").on("click", ()=> {
            $("#btn02").trigger("click")
        })


        $("#div01").hover(
            (e) => {
                $("#div01").toggleClass("highlighted")
            }, 
        )


        
    }
)