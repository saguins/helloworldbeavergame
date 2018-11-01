let playtext;
let cursors;

let width;
let height;
let x;
let y;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({ key: 'MainMenu' });
    }
    preload() {
        this.load.image('sky', '../../images/sky.png');
    }
    create() {
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        //this.add.image(x, y, 'sky');

        let style = { font: '40px Arial', fill: '#FFFFFF', align: 'center' };
        playtext = this.add.text(x, y, 'Click to Play!', style).setOrigin(0.5, 0.5);

        cursors = this.input.keyboard.createCursorKeys();

        playtext.setInteractive();
        playtext.on('pointerup', () => {
            this.scene.start('GameScene');
        });
    }
    update() {
        if (cursors.space.isDown) {
            this.scene.start('GameScene');
        }
    }
}
export default MainMenu;
