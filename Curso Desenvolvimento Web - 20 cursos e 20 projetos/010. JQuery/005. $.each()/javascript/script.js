$(document).ready(
    () => {
        $.each($('.interest:checked'), (index, value) => {
        console.log (index,value.value)
    })
    }
)