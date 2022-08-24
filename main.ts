input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
	
})
