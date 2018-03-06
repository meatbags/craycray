// dump unused EYE RAY code here
// maybe add it in later


resize()
//this.setRayPosition(this.eye.ray, this.centre.relative.x, this.centre.relative.y, this.scale.global);

_events() {
  /*
  $('.item').on('mouseenter', (e) => {
    const y = this.target.offset().top - $(document).scrollTop() + this.target.height();
    if (y >= 0) {
      this.setRay($(e.currentTarget));
    }
  });
  $('.item').on('mouseleave', () => {
    this.hideRay();
  });
  */
}

move() {
  // code here
  // code here
  // code here

  if (mag != 0) {
    const len = this.pupilExtension * this.scale;

    if (mag <= len) {
      x = this.mouse.relative.x;
      y = this.mouse.relative.y;
    } else {
      x = (x / mag) * len + this.centre.relative.x;
      y = (y / mag) * len + this.centre.relative.y;
    }

    this.resizeImage(this.eye.pupil, x, y + this.offset.pupil, this.scale);
    //this.setRayPosition(this.eye.ray, x, y, this.scale);
  }
}

show() {
  // show elements
  this.eye.ray.removeClass('display-none');
}

setRayPosition(image, x, y, scale) {
  // set eye ray position
  const offsetY = -16;
  const h = image[0].naturalHeight * scale;
  image.css({
    left: x,
    top: y - h / 2 + offsetY,
    height: 'auto'
  });
}

setRay(item) {
  // fade in ray
  this.eye.ray.addClass('active');

  // get mag
  const itemx = item.offset().left + item.width() / 2;
  const itemy = item.offset().top + $(document).scrollTop() + item.height() / 2;
  const x = itemx - this.centre.x;
  const y = itemy - (this.centre.y + $(document).scrollTop());
  const mag = Math.sqrt(x * x + y * y);
  const angle = Math.atan2(y, x) / Math.PI * 180;
  this.eye.ray.css({width: mag, transform: `rotate(${angle}deg)`});
}

hideRay(item) {
  // fade out ray
  this.eye.ray.removeClass('active');
}
