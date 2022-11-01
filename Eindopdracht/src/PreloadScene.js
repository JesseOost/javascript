
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.audio('jump', 'assets/aud/jump.m4a');
    this.load.audio('hit', 'assets/aud/hit.m4a');
    this.load.audio('reach', 'assets/aud/reach.m4a');

    this.load.image('ground', 'assets/img/ground.png');
    this.load.image('car-idle', 'assets/img/car-idle.png');
    this.load.image('game-over', 'assets/img/game-over.png');

    this.load.spritesheet('car', 'assets/img/car-drive.png', {
      frameWidth: 273,
      frameHeight: 66
    })

    this.load.image('obsticle', 'assets/img/barrel.png')
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;
