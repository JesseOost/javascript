/** @type {import('../typings/phaser')} */

import { LoadScene } from '../src/scenes/LoadScene'
import { MenuScene } from '../src/scenes/MenuScene'
import { GameScene } from './scenes/GameScene'

let game = new Phaser.Game({
    width: 800,
    height: 800,
    scene: [
        LoadScene, MenuScene, GameScene
    ],
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
})

let gameScore = 0
let highScore = 0
