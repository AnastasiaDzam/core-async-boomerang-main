// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 100;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    if(this.position===0){
      this.generateSkin();
      this.position = 100
    }
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
    this.generateSkin();
    this.positionX = 30;
    this.positionY = Math.floor(1 + Math.random() * (4 + 1 - 1));
  }
}

module.exports = Enemy;
