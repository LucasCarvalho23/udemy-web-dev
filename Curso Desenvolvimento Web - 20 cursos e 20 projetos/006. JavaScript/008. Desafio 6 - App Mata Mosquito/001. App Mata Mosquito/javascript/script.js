let selectLevel = document.querySelector ("#select-level-id")
let selectValue

function startGame() {
    selectValue = selectLevel.value

    if (selectValue == "noone") {
        alert ("Choice a level!")
    } else {
        window.location.href = "pages/App.html?" + selectValue
    }
}