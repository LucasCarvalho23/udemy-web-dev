$(document).ready(
    () => {

        $('body').off('focus', '.input', e => {
            $(e.target).removeClass('blur-style')
            $(e.target).addClass('focus-style')
        })
        
        $('body').off('blur', '.input', e => {
            $(e.target).removeClass('focus-style')
            $(e.target).addClass('blur-style')
        })

        $('body').on('focus', 'input', e => {
            $(e.target).removeClass('blur-style')
            $(e.target).addClass('focus-style')
        })
        
        $('body').on('blur', 'input', e => {
            $(e.target).removeClass('focus-style')
            $(e.target).addClass('blur-style')
        })



        $('body').append("<br /><br /><input type='text' class='newInput'/>")

    }
)