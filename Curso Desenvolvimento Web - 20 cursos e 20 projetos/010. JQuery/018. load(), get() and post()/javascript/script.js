$(document).ready(
    () => {

        $("#link01-id").on("click", ()=> {
            $("#container-content").load("link01.html")
        })

        $("#link02-id").on("click", ()=> {
            $.get("link02.html", data => {
                $("#container-content").html(data)
            })
        })

        $("#link03-id").on("click", ()=> {
            $.get("link03.html", data => {
                $("#container-content").html(data)
            })
        })
    }   
)
