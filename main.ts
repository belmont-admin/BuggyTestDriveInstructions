let start = 0
input.onButtonPressed(Button.A, function () {
    start = 5
    while (start > 0) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
})
