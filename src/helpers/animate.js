const Animate = function(el, initialSprite, spriteSize, speed, finish) {
  this.el = el;
  this.speed = speed;
  this.sprite = initialSprite - 1;
  this.size = -spriteSize;
  this.finish = finish || function() {
    return true;
  };

  this.play = function() {
    let self = this;
    setTimeout(function() {
      self.el.style.backgroundPosition = 'center ' + self.size * self.sprite + 'px';
      self.sprite -= 1;

      if (self.sprite < 0) {
        return self.finish();
      }

      self.play();
    }, self.speed);
  };

  this.el.style.opacity = 1;
  this.play();
};

module.exports = Animate;
