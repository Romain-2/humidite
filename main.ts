input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showString("HUMIDITE")
basic.forever(function () {
    serial.writeValue("x", gatorSoil.moisture(AnalogPin.P0, gatorSoilType.soilMoisture, DigitalPin.P1))
    basic.pause(500)
})
