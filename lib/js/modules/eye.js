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
    this.offset = {
      glow: 0,
      base: 0,
      pupil: 0,
      ray: 0
    }
    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      relative: {
        x: 0,
        y: 0
      }
    };
    this.centre = {
      x: 0,
      y: 0,
      relative: {
        x: 0,
        y: 0
      }
    };
    this.scale = 1;
    this.eyeWidth = 290;
    this.pupilExtension = 42;
    this.active = true;
    this.duration = 0;
    this.durationMax = 0.6;

    // set events

    this.events();
    this.resize();
    setTimeout(() => { this.show(); }, 100);
  }

  events() {
    // doc events

    this.target.on('mousedown', (e) => {
      if (this.active) {
        this.roll(e.clientX, e.clientY);
      }
    });
    $(document).on('mousemove', (e) => {
      if (this.active) {
        this.move(e.clientX, e.clientY);
      } else {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      }
    });
    $(window).on('resize', (e) => {
      this.resize();
    });
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

  roll(mouseX, mouseY) {
    // roll the eye

    let x = this.mouse.x - this.centre.x;
    let y = this.mouse.y - this.centre.y;
    let h = Math.hypot(x, y);
    let len = this.pupilExtension * this.scale;

    // set new pupil position

    this.active = false;
    this.animation = {
      mag: (h < len) ? h : len,
      angle: Math.atan2(y, x)
    };
    this.time = (new Date()).getTime();
    this.duration = this.durationMax;
    this.loop();
  }

  loop() {
    // loop while animating

    if (this.duration > 0) {
      requestAnimationFrame(() => { this.loop(); });
      const now = (new Date()).getTime();
      const delta = (now - this.time) / 1000.;
      this.time = now;
      this.duration -= delta;
      this.animateEye();
    } else {
      if (!isHome) {
        window.location.href = homeURL;
      }
      this.active = true;
      this.move(this.mouse.x, this.mouse.y);
    }
  }

  animateEye() {
    // animate

    const t = Math.min(1, 1 - (this.duration / this.durationMax));
    const x = this.centre.relative.x + Math.cos(this.animation.angle + t * Math.PI * 4) * this.animation.mag;
    const y = this.centre.relative.y + Math.sin(this.animation.angle + t * Math.PI * 4) * this.animation.mag;
    this.resizeImage(this.eye.pupil, x, y + this.offset.pupil, this.scale);
  }

  resize() {
    // resize pieces

    if (!this.resizing) {
      this.resizing = true;
      this.resizeCount = (this.resizeCount) ? this.resizeCount + 1 : 1;

      setTimeout(() => {
        // get position

        const pos = this.target.position();
        const width = this.target.width();
        const height = this.target.height();
        this.centre.x = pos.left + width / 2;
        this.centre.y = pos.top + height / 2;
        this.centre.relative.x = width / 2;
        this.centre.relative.y = height / 2;

        // calculate new scale and reposition images

        this.scale = this.eyeWidth / this.eye.base[0].naturalWidth;
        this.offset.glow = 29 * this.scale;
        this.offset.pupil = -22 * this.scale;

        this.resizeImage(this.eye.base, this.centre.relative.x, this.centre.relative.y, this.scale);
        this.resizeImage(this.eye.glow, this.centre.relative.x, this.centre.relative.y + this.offset.glow, this.scale);
        this.resizeImage(this.eye.pupil, this.centre.relative.x, this.centre.relative.y + this.offset.pupil, this.scale);
        //this.setRayPosition(this.eye.ray, this.centre.relative.x, this.centre.relative.y, this.scale);

        this.resizing = false;
      }, (this.resizeCount == 1) ? 1 : 200);
    }
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

  move(mouseX, mouseY) {
    // set new mouse coords

    this.mouse.x = mouseX;
    this.mouse.y = mouseY;
    this.mouse.relative.x = mouseX - this.centre.x + this.centre.relative.x;
    this.mouse.relative.y = mouseY - this.centre.y + this.centre.relative.y;

    // calculate vector, normalise

    let x = this.mouse.x - this.centre.x;
    let y = this.mouse.y - this.centre.y;
    const mag = Math.sqrt(x * x + y * y);

    // set new pupil position

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

    this.eye.base.removeClass('display-none');
    this.eye.glow.removeClass('display-none');
    this.eye.pupil.removeClass('display-none');
    //this.eye.ray.removeClass('display-none');
  }

  /*
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
  */
}

export default Eye;
