let fieldValue
let lastAction

function functionTest(tipo, acao) {
    
    if (tipo === "valor") {

        document.querySelector ("#output-display-id").value += acao

    } else if (tipo === "ação") {

        if (acao === "c") {

            document.querySelector ("#output-display-id").value = ''

        } else if (acao === "+" || acao === "-" || acao === "*" || acao === "/") {

            document.querySelector ("#output-display-id").value += acao

        } else if (acao === "=") {

            fieldValue = document.querySelector ("#output-display-id").value
            document.querySelector ("#output-display-id").value = eval(fieldValue)

        }

    }

}