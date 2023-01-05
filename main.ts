input.onButtonPressed(Button.A, function () {
    if (me > 0) {
        led.unplot(me, 4)
        me += -1
        led.plot(me, 4)
    }
})
input.onSound(DetectedSound.Loud, function () {
    lazerx = me
    if (me == stonex) {
        lazer = 1
        stoney = 5
        points += 2
    }
    led.plot(lazerx, 3)
    led.plot(lazerx, 2)
    led.plot(lazerx, 1)
    led.plot(lazerx, 0)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.UntilDone)
    basic.pause(50)
    led.unplot(lazerx, 3)
    led.unplot(lazerx, 2)
    led.unplot(lazerx, 1)
    led.unplot(lazerx, 0)
})
input.onButtonPressed(Button.B, function () {
    if (me < 4) {
        led.unplot(me, 4)
        me += 1
        led.plot(me, 4)
    }
})
let lazer = 0
let stonex = 0
let lazerx = 0
let stoney = 0
let me = 0
me = 2
led.plot(me, 4)
let p = 500
let life = 5
let points = 0
stoney += 1
basic.forever(function () {
    stonex = randint(0, 4)
    if (lazer == 1) {
        lazer = 0
        stoney = 5
    } else {
        while (stoney <= 4 && lazer == 0) {
            led.plot(stonex, stoney)
            if (me == stonex && stoney == 4) {
                led.plot(stonex - 1, stoney)
                led.plot(stonex + 1, stoney)
                led.plot(stonex, stoney - 1)
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                life += -1
                basic.pause(300)
                led.unplot(stonex - 1, stoney)
                led.unplot(stonex + 1, stoney)
                led.unplot(stonex, stoney - 1)
            } else {
                basic.pause(p)
                led.unplot(stonex, stoney)
                p += -1
                points += 1
                if (life == 0) {
                    basic.showString("" + (points))
                    game.gameOver()
                }
            }
            stoney += 1
        }
        stoney = 0
    }
})
