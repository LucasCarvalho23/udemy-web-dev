$(document).ready(
    () => {


        $('#list01').append('<li>Item04</li>')
        $('#list01').prepend('<li>Item00</li>') 
        $('#list02').prepend('<div>Item13</div>') // within the div
        $('#list02').after('<p>Vasco</p>') //Out the div
        $('#list02').before('<p>Vasco</p>') //Out the div
        $('#list03').html('<p>I replaced the content</p>')
        $('#list04').remove()

        console.log($('#list01'))




    }
)