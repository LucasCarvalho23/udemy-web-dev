$(document).ready(
    () => {
        
        $("#topo").css("background-color","black")
        $("#topo").css("color","white")
        $("#topo").css("padding","5px")
        $("#topo").css("border-radius","10px")
        $("#topo").css("margin-bottom","5px")

        $('input').addClass('margin-bottom')
        $('button').addClass('margin-top')
        $('button').addClass('btn btn-dark')
        $('#corpo').find('h3').addClass('color')

        console.log($('button').hasClass('margin-bottom'))

        $('#corpo').find('h3').removeClass('color')

    }
)

