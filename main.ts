/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah Yang
 * Created on: April 2026
 * This program uses nest loops to move sprite around microbit
*/

// variables
let loopCounter1 = 0
let loopCounter2 = 0
let sprite: game.LedSprite = null

// setting up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when A is pressed, sprite moves clockwise
input.onButtonPressed(Button.A, function () {

    // clearing everything
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    loopCounter1 = 0
    loopCounter2 = 0

    // nested loops
    while (loopCounter1 < 4) {
        loopCounter1 = 0
        loopCounter2 = 0
        while (loopCounter2 < 4) {
            sprite.move(1)
            basic.pause(300)
            loopCounter2++
        }
        sprite.turn(Direction.Right, 90)
    }
    sprite.delete()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
