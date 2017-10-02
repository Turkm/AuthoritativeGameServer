'use strict';

class NPC {
  constructor(_id, _spriteName, _x, _y, _speed, _fireRate, _bulletSpeed) {
    this.id = _id;
    this.spriteName = _spriteName;
    this.pos = {
      x: _x,
      y: _y,
    };

    this.speed = _speed;
    this.fireRate = _fireRate;
    this.bulletSpeed = _bulletSpeed;
  }

  Update(deltaTime) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = NPC;
}
