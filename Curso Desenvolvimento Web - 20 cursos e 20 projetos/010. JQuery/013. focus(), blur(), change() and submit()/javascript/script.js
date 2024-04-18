$(document).ready(
    () => {

        $("#name-input, #email-input").focus(
            (e) => {
                $(e.target).addClass('inputFocus')
            }
        )
        
        $("#name-input,#email-input").blur(
            (e) => {
                $(e.target).removeClass('inputFocus')
            }
        )

        $("#select-id").change( (e)=> {
            console.log($(e.target).val())
        })

        $('form').submit( (e)=> {
            e.preventDefault()
            console.log("Form send")
        })

    }
)
