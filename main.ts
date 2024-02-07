let notre_humidite = 0
basic.showString("HUMIDITE")
basic.forever(function () {
    notre_humidite = gatorSoil.moisture(AnalogPin.P0, gatorSoilType.adcVal, DigitalPin.P1)
    serial.writeValue("x", notre_humidite)
    if (notre_humidite < 300) {
        basic.showIcon(IconNames.Sad)
    } else if (notre_humidite > 600) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
