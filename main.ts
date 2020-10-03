input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . . . .
        # . . . .
        `)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P7, 0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(60000)
    pins.digitalWritePin(DigitalPin.P7, 0)
    basic.clearScreen()
})
led.enable(true)
