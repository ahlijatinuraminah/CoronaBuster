import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import CoronaBusterScene from './scenes/CoronaBusterScene'
import GameOverScene from './scenes/GameOverScene'

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 620,
	physics: {
		default: 'arcade',
		arcade: {
			
		}
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	scene: [CoronaBusterScene, GameOverScene]
}

export default new Phaser.Game(config)
