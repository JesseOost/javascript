/** @type {import('../typings/phaser')} */
import { CST } from '../CST'
import { LoadScene } from './LoadScene'

export class MenuScene extends Phaser.Scene{

    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }

    create(){
        this.add.text (100, 0, 'SCORE', {fill: '#ffffff', fontSize: 46, fontFamily: 'Digital Arcade'})
        this.add.text (500, 0, 'HIGH SCORE', {fill: '#ffffff', fontSize: 46, fontFamily: 'Digital Arcade'})
        this.scoreText = this.add.text(100, 50, this.score, {fill: '#3cdfff', fontSize: 38, fontFamily: 'Digital Arcade'})
        this.scoreText = this.add.text(500, 50, LoadScene.highScore, {fill: '#3cdfff', fontSize: 38, fontFamily: 'Digital Arcade'})

        
        this.add.text (100, 50, '', {fill: '#3cdfff', fontSize: 38, fontFamily: 'Digital Arcade'})
        this.add.text (500, 50, '', {fill: '#3cdfff', fontSize: 38, fontFamily: 'Digital Arcade'})

        let playGameBtn = this.add.text(400, 400, 'Play Game', {fill: '#ffffff', fontSize: 46, fontFamily: 'Digital Arcade'}).setOrigin(0.5)

        playGameBtn.setInteractive()
        playGameBtn.on('pointerdown', () => {
            this.scene.start(CST.SCENES.GAME)
        })
    }
}