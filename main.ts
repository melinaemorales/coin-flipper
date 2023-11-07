/**
 * Coin Toss Game:
 * 
 * -When microbit is shaken I want there to be some suspense beforehand so I want there to be some icons showing beforehand. 
 * 
 * -After the icons, then it will randomly choose true or false
 * 
 * -Show a check mark for true, play a scale going up
 * 
 * -Show an x for false, play a scale going down.
 */
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    }
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
        music.play(music.stringPlayable("C D E F G A B C5 ", 160), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.stringPlayable("C5 B A G F E D C ", 160), music.PlaybackMode.UntilDone)
    }
})
