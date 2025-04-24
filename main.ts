input.onButtonPressed(Button.A, function () {
    num1 = randint(1, 10)
    basic.showNumber(num1)
    basic.pause(2000)
    basic.clearScreen()
    num2 = randint(1, 10)
    basic.showNumber(num2)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num1 * num2)
    basic.pause(2000)
    basic.clearScreen()
})
let num2 = 0
let num1 = 0
num1 = 0
num2 += 0
