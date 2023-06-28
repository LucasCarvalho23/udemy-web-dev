let number01 = 10
let number02 = 20
let number03


document.write (`Number 01 is ${number01}`)
document.write("<br>")
document.write (`Number 02 is ${number02}`)
document.write("<br>")
document.write (`Number 03 is ${number03}`)
document.write("<hr>")

document.write("<p>After the change:</p>")

number03 = number02
number02 = number01
number01 = number03

document.write (`Number 01 is ${number01}`)
document.write("<br>")
document.write (`Number 02 is ${number02}`)
document.write("<br>")

