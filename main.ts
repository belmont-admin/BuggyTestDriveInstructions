input.onButtonPressed(Button.A, function () {
    start = 5
    while (start > 0) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
})
let start = 0
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(25)
basic.showIcon(IconNames.Happy)
