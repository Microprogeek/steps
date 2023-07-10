input.onGesture(Gesture.Shake, function () {
    cantidad_pasos += 1
    radio.sendValue("pasos", cantidad_pasos * 2)
})
let cantidad_pasos = 0
radio.setGroup(3)
cantidad_pasos = 0
