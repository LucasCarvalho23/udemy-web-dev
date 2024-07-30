$(document).ready(() => {

    $("#btn-submit").on("click", (e)=> {
        e.preventDefault()

        let dadosForm = $("form").serialize() //Serialize converts data into array
        
        $.ajax({
            type: 'post',
            url: 'app.php',
            data: dadosForm,
            dataType: 'json',
            success: dados => {
                console.log(dados);
            },
            error: error => {
                console.log(error);
            }
        })
    })

})

