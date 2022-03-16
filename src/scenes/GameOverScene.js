import Phaser from 'phaser'

var replayButton

export default class GameOverScene extends Phaser.Scene
{
    constructor()
    {
        super('game-over-scene')
    }
    //ni belum
    init(data) 
    {
        this.score = data.score
    }

    preload()
    {
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('gameover', 'images/gameover.png')
        this.load.image('replay-button', 'images/replay.png')
    }

    create()
    {
        this.add.image(200, 320, 'background')
        this.add.image(200, 200, 'gameover')
        
        this.replayButton = this.add.image(200, 530, 'replay-button').setInteractive()
        this.replayButton.once('pointerup', () => { this.scene.start('corona-buster-scene') }, this)

        //belakangan
        this.add.text(80, 300, 'SCORE:', { fontSize: '60px', fill: '#000' })
        this.add.text(300, 300, this.score, { fontSize: '60px', fill: '#000'})
        
    }
}