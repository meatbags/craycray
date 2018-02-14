class Eye {
  constructor() {
    // eye handler

    this.target = $('.nav-logo');
    this.eye = {
      glow: $('.eye-glow'),
      base: $('.eye-base'),
      pupil: $('.eye-pupil'),
      ray: $('.eye-ray')
    };
    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.centre = {
      x: 0,
      y: 0
    };
    this.scale = 1;
    this.eyeWidth = 340;
    this.pupilSize = 35;

    // set events

    this._events();
    this.resize();
    this.show();
  }

  _events() {
    // doc events

    $(document).on('mousemove', (e) => {
      this.move(e.clientX, e.clientY);
    });
    $(window).on('resize', (e) => {
      this.resize();
    });
    $('.item').on('mouseenter', (e) => {
      this.setRay($(e.currentTarget));
    });
    $('.item').on('mouseleave', () => {
      this.hideRay();
    });
  }

  resize() {
    // resize pieces

    const pos = this.target.position();
    const width = this.target.width();
    const height = this.target.height();
    this.centre.x = pos.left + width / 2;
    this.centre.y = pos.top + height / 2;

    // calculate new scale and reposition images

    this.scale = this.eyeWidth / this.eye.base[0].naturalWidth;
    this.resizeImage(this.eye.base, this.centre.x, this.centre.y, this.scale);
    this.resizeImage(this.eye.glow, this.centre.x, this.centre.y, this.scale);
    this.resizeImage(this.eye.pupil, this.centre.x, this.centre.y, this.scale);
    this.setRayPosition(this.eye.ray, this.centre.x, this.centre.y - 16, this.scale);
  }

  resizeImage(image, x, y, scale) {
    // resize image to scale

    const w = image[0].naturalWidth * scale;
    const h = image[0].naturalHeight * scale;
    image.css({
      left: x - w / 2,
      top: y - h / 2,
      width: w,
      height: 'auto'
    });
  }

  setRayPosition(image, x, y, scale) {
    // set eye ray position

    //const w = image[0].naturalWidth * scale;
    const h = image[0].naturalHeight * scale;
    image.css({
      left: x,
      top: y - h / 2,
      height: 'auto'
    });
  }

  setRay(item) {
    // fade in ray

    this.eye.ray.addClass('active');

    // get mag

    const itemx = item.offset().left + item.width() / 2;
    const itemy = item.offset().top + item.height() / 2;
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

  move(mouseX, mouseY) {
    // set new mouse coords

    this.mouse.x = mouseX;
    this.mouse.y = mouseY;

    // calculate vector, normalise

    let x = this.mouse.x - this.centre.x;
    let y = this.mouse.y - this.centre.y;
    const mag = Math.sqrt(x * x + y * y);

    // set new pupil position

    if (mag != 0) {
      const len = this.pupilSize * this.scale;

      if (mag <= len) {
        x = this.mouse.x;
        y = this.mouse.y;
      } else {
        x = (x / mag) * len + this.centre.x;
        y = (y / mag) * len + this.centre.y;
      }

      this.resizeImage(this.eye.pupil, x, y, this.scale);
      this.resizeImage(this.eye.glow, x, y, this.scale);
      //this.setRayPosition(this.eye.ray, x, y, this.scale);
    }
  }

  show() {
    // show elements

    this.eye.base.removeClass('display-none');
    this.eye.glow.removeClass('display-none');
    this.eye.pupil.removeClass('display-none');
    this.eye.ray.removeClass('display-none');
  }
}

export default Eye;
