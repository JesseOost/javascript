import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const { height, width } = this.game.config;
    this.gameSpeed = 10;
    this.isGameRunning = false;
    this.respawnTime = 0;
    this.score = 0;

    this.jumpSound = this.sound.add('jump', {volume: 0.2});
    this.hitSound = this.sound.add('hit', {volume: 0.2});
    this.reachSound = this.sound.add('reach', {volume: 0.2});

    this.startTrigger = this.physics.add.sprite(0, 10).setOrigin(0, 1).setImmovable();
    this.ground = this.add.tileSprite(0, height, 88, 26, 'ground').setOrigin(0, 1)
    this.car = this.physics.add.sprite(0, height, 'car-idle')
      .setCollideWorldBounds(true)
      .setGravityY(1000)
      .setBodySize(182, 92)
      .setDepth(1)
      .setOrigin(0, 1);

    this.scoreText = this.add.text(width, 0, "00000", {fill: "#535353", font: '900 35px Courier', resolution: 5})
      .setOrigin(1, 0)
      .setAlpha(0);

    this.highScoreText = this.add.text(0, 0, "00000", {fill: "#535353", font: '900 35px Courier', resolution: 5})
      .setOrigin(1, 0)
      .setAlpha(0);

    this.gameOverScreen = this.add.container(width / 2, height / 2 - 50).setAlpha(0)
    this.restart = this.add.image(0, 0, 'game-over').setInteractive();
    this.gameOverScreen.add(this.restart);

    this.obsticles = this.physics.add.group();

    this.initAnims();
    this.initStartTrigger();
    this.initColliders();
    this.handleInputs();
    this.handleScore();
  }

  // Aanmaken van de collisions van de auto en obstacels
  initColliders() {
    this.physics.add.collider(this.car, this.obsticles, () => {
      this.highScoreText.x = this.scoreText.x - this.scoreText.width - 20;

      const highScore = this.highScoreText.text.substr(this.highScoreText.text.length - 5);
      const newScore = Number(this.scoreText.text) > Number(highScore) ? this.scoreText.text : highScore;

      this.highScoreText.setText('Highscore: ' + newScore);
      this.highScoreText.setAlpha(1);

      this.physics.pause();
      this.isGameRunning = false;
      this.anims.pauseAll();
      this.car.setTexture('car-idle');
      this.respawnTime = 0;
      this.gameSpeed = 10;
      this.gameOverScreen.setAlpha(1);
      this.score = 0;
      this.hitSound.play();
    }, null, this);
  }

  // Zorgt voor het starten van het spel
  initStartTrigger() {
    const { width, height } = this.game.config;
    this.physics.add.overlap(this.startTrigger, this.car, () => {
      if (this.startTrigger.y === 10) {
        this.startTrigger.body.reset(0, height);
        return;
      }

      this.startTrigger.disableBody(true, true);

      const startEvent =  this.time.addEvent({
        delay: 1000/60,
        loop: true,
        callbackScope: this,
        callback: () => {
          this.car.setVelocityX(80);
          this.car.play('car-drive', 1);

          if (this.ground.width < width) {
            this.ground.width += 17 * 2;
          }

          if (this.ground.width >= 1000) {
            this.ground.width = width;
            this.isGameRunning = true;
            this.car.setVelocityX(0);
            this.scoreText.setAlpha(1);
            startEvent.remove();
          }
        }
      });
    }, null, this)
  }

  // Aanmaken van de animatie van de auto
  initAnims() {
    this.anims.create({
      key: 'car-drive',
      frames: this.anims.generateFrameNumbers('car', {start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
  }

  // Bijhouden van de highscore
  handleScore() {
    this.time.addEvent({
      delay: 1000/10,
      loop: true,
      callbackScope: this,
      callback: () => {
        if (!this.isGameRunning) { return; }

        this.score++;
        this.gameSpeed += 0.01

        if (this.score % 100 === 0) {
          this.reachSound.play();

          this.tweens.add({
            targets: this.scoreText,
            duration: 100,
            repeat: 3,
            alpha: 0,
            yoyo: true
          })
        }

        const score = Array.from(String(this.score), Number);
        for (let i = 0; i < 5 - String(this.score).length; i++) {
          score.unshift(0);
        }

        this.scoreText.setText(score.join(''));
      }
    })
  }

  // Werking van de controls
  handleInputs() {
    this.restart.on('pointerdown', () => {
      this.car.setVelocityY(0);
      this.car.body.height = 92;
      this.car.body.offset.y = 0;
      this.physics.resume();
      this.obsticles.clear(true, true);
      this.isGameRunning = true;
      this.gameOverScreen.setAlpha(0);
      this.anims.resumeAll();
    })

    this.input.keyboard.on('keydown_SPACE', () => {
      if (!this.car.body.onFloor() || this.car.body.velocity.x > 0) { return; }

      this.jumpSound.play();
      this.car.body.height = 92;
      this.car.body.offset.y = 0;
      this.car.setVelocityY(-2000);
      this.car.setTexture('car', 0);
    })

    this.input.keyboard.on('keyup_DOWN', () => {
      if ((this.score !== 0 && !this.isGameRunning)) { return; }

      this.car.body.height = 92;
      this.car.body.offset.y = 0;
    })
  }

  // Willekeurig plaatsen van de obstakels
  placeObsticle() {
    const distance = Phaser.Math.Between(600, 900);

    let obsticle;
    obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height, `obsticle`)
      .setOrigin(0, 1);

    obsticle.body.offset.y = +10;
    
    obsticle.setImmovable();
  }

  // Er voor zorgen dat het spel sneller gaat hoe verder je komt en het verwijderen van obstakels als ze buiten beeld zijn.
  update(time, delta) {
    if (!this.isGameRunning) { return; }

    this.ground.tilePositionX += this.gameSpeed;
    Phaser.Actions.IncX(this.obsticles.getChildren(), -this.gameSpeed);

    this.respawnTime += delta * this.gameSpeed * 0.08;
    if (this.respawnTime >= 1500) {
      this.placeObsticle();
      this.respawnTime = 0;
    }

    this.obsticles.getChildren().forEach(obsticle => {
      if (obsticle.getBounds().right < 0) {
        this.obsticles.killAndHide(obsticle);
      }
    })
  }
}

export default PlayScene;
