/** @type {import('../typings/phaser')} */
import { CST } from '../CST'
import { LoadScene } from './LoadScene'

export class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: CST.SCENES.GAME
        })
    }

    create(){
        this.score = 0
        
        // Displays hight score and core
        this.add.text(100, 0, 'SCORE', {fill: '#ffffff', fontSize: 46, fontFamily: 'Digital Arcade'})
        this.add.text(500, 0, 'HIGH SCORE', {fill: '#ffffff', fontSize: 46, fontFamily: 'Digital Arcade'})
        this.scoreText = this.add.text(100, 50, this.score, {fill: '#3cdfff', fontSize: 38, fontFamily: 'Digital Arcade'})
        this.scoreText = this.add.text(500, 50, LoadScene.highScore, {fill: '#3cdfff', fontSize: 38, fontFamily: 'Digital Arcade'})

        // Loads the ingredients
        this.cheese = this.physics.add.image(600, 0, 'cheese').setOrigin(0, 0).setScale(0.2).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1)
        this.chocolate = this.physics.add.image(600, 0, 'chocolate').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1)
        this.dough = this.physics.add.image(600, 0, 'dough').setOrigin(0, 0).setScale(0.2).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1)
        this.sugar = this.physics.add.image(600, 0, 'sugar').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1)

        // Loads the nasties
        this.fish = this.physics.add.image(600, 0, 'fish').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1)
        this.gear = this.physics.add.image(600, 0, 'gear').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1)

        // Loads the images
        this.trashCan = this.physics.add.image(0, 630, 'trashCan').setOrigin(0, 0).setScale(0.4)
        this.trashCan = this.physics.add.image(90, 630, 'trashCan').setOrigin(0, 0).setScale(0.4)
        this.trashCan = this.physics.add.image(180, 630, 'trashCan').setOrigin(0, 0).setScale(0.4)
        this.trashCan = this.physics.add.image(500, 630, 'trashCan').setOrigin(0, 0).setScale(0.4)
        this.trashCan = this.physics.add.image(600, 630, 'trashCan').setOrigin(0, 0).setScale(0.4)
        this.trashCan = this.physics.add.image(700, 630, 'trashCan').setOrigin(0, 0).setScale(0.4)

        this.bowlEmpty = this.physics.add.image(270, 630, 'bowlEmpty').setOrigin(0, 0).setScale(0.4)
        this.add.text(370, 725, '0', {fill: '#000000', fontSize: 46, fontFamily: 'Digital Arcade'})
        
        // Loads the chef
        this.chef = this.physics.add.sprite(400, 400, 'chef').setScale(0.1)
        this.chef.setCollideWorldBounds(true)

        // Set chef collisions
        this.physics.add.overlap(this.chef, this.cheese, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.chef, this.chocolate, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.chef, this.dough, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.chef, this.sugar, this.chefVsItemCollision, null, this)

        this.physics.add.overlap(this.chef, this.fish, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.chef, this.gear, this.chefVsItemCollision, null, this)

        // Set good collisions with bowl
        this.physics.add.overlap(this.bowlEmpty, this.cheese, this.addPoints, null, this)
        this.physics.add.overlap(this.bowlEmpty, this.chocolate, this.addPoints, null, this)
        this.physics.add.overlap(this.bowlEmpty, this.dough, this.addPoints, null, this)
        this.physics.add.overlap(this.bowlEmpty, this.sugar, this.addPoints, null, this)

        // Set bad collisions with bowl
        this.physics.add.overlap(this.bowlEmpty, this.fish, this.removePoints, null, this)
        this.physics.add.overlap(this.bowlEmpty, this.gear, this.removePoints, null, this)

        // Set collisions with trash cans
        this.physics.add.overlap(this.trashCan, this.cheese, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.trashCan, this.chocolate, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.trashCan, this.dough, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.trashCan, this.sugar, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.trashCan, this.fish, this.chefVsItemCollision, null, this)
        this.physics.add.overlap(this.trashCan, this.gear, this.chefVsItemCollision, null, this)

        // Set keybindings
        this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)

    }

    update(){
        this.moveChef()
        this.pushClouds()
    }

    moveChef(){
        if(this.wKey.isDown){
            this.chef.y -= 6
        }

        if(this.aKey.isDown){
            this.chef.x -= 6
        }

        if(this.sKey.isDown){
            this.chef.y += 6
        }

        if(this.dKey.isDown){
            this.chef.x += 6
        }
    }

    pushClouds(){
        if(this.left.isDown){
            this.cloud = this.physics.add.sprite(this.chef.x, this.chef.y, 'cloud').setScale(0.01)
            this.cloud.setGravityX(-1000)
        }

        if(this.right.isDown){
            this.cloud = this.physics.add.sprite(this.chef.x, this.chef.y, 'cloud').setScale(0.01)
            this.cloud.setGravityX(1000)
        }

        if(this.down.isDown){
            this.cloud = this.physics.add.sprite(this.chef.x, this.chef.y, 'cloud').setScale(0.01)
            this.cloud.setGravityY(1000)
        }
    }

    cloudCollision(){
        this.cloud.destroy()
    }

    chefVsItemCollision(){
        if(this.score > LoadScene.highScore){
            LoadScene.highScore = this.score

        }
        this.scene.start(CST.SCENES.MENU)
    }

    addPoints(bowl, item){
        item.y = 0
        this.score += 10
        this.scoreText.setText(this.score)
        console.log(this.score)
    }

    removePoints(bowl, item){
        item.y = 0
        this.score -= 20
        this.scoreText.setText(this.score)
        console.log(this.score)
    }

    moveItemUp(trash, item){
        item.y = 0
    }

}
