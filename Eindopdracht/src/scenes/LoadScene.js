/** @type {import('../typings/phaser')} */
import { CST } from '../CST'

export class LoadScene extends Phaser.Scene{

    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }

    preload(){
        let highScore = 0

        // Preload ingredients
        this.load.spritesheet('cheese', './assets/img/cheese.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('chocolate', './assets/img/chocolate.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('dough', './assets/img/dough.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('sugar', './assets/img/sugar.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })


        // Preload nasties
        this.load.spritesheet('bolt', './assets/img/bolt.png', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('can', './assets/img/can.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('fish', './assets/img/fish.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('gear', './assets/img/gear.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('nail', './assets/img/nail.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })

        // Preload bowls, trash cans and cloud
        this.load.spritesheet('bowlFull', './assets/img/bowlFull.png', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('bowlEmpty', './assets/img/bowlEmpty.png', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('trashCan', './assets/img/trashCan.jpg', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
        this.load.spritesheet('cloud', './assets/img/cloud.png', {
            frameWidth: '100%',
            frameHeight: '100%'
        })

        // Preload Chef
        this.load.spritesheet('chef', './assets/img/chef.png', {
            frameWidth: '100%',
            frameHeight: '100%'
        })
    }

    create(){
        this.scene.start(CST.SCENES.MENU, 'hello world')
        this.scene.launch()
    }

}