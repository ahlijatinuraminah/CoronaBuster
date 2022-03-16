import Phaser from 'phaser'
const formatLife = (gameLife) => `Life: ${gameLife}`

export default class LifeLabel extends Phaser.GameObjects.Text
{
    constructor(scene, x, y, lifePlayer, style) 
    {
        super(scene, x, y, formatLife(lifePlayer), style)
        this.life= lifePlayer
    }

    setLife(lifePlayer)
    {
        this.life = lifePlayer
        this.setText(formatLife(lifePlayer))
    }
    
    getLife()
    {
        return this.life
    }
    
    add(points)
    {
        this.setLife(this.life + points)
    }

    subtract(value){
        this.setLife(this.life - value)
    }
}