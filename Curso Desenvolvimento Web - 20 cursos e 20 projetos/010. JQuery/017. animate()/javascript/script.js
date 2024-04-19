$(document).ready(
    () => {

        $("#startAnimation").on("click", ()=> {
           $("#div-id").animate({
            'width': '150px',
            'height': '150px',
            'border-radius': '10px'
           }, 2000)
        })

        $("#startAnimation2").on("click", ()=> {
            $("#div2-id").animate({
             'width': '150px',
             'height': '150px',
             'border-radius': '10px'
            }, 
            {
                duration: 4000,

                start: () => {
                    console.log("Animated working");
                },

                complete: () => {
                    console.log("Animated ended");
                }
            })
         })

    }
)