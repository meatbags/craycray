class Menu {
  constructor() {
    // menu handler

    this.fps = 12;
    this.frameInterval = 1000 / this.fps;
    this._events();
  }

  _uid() {
    // get unique id

    this.uid = this.uid ? this.uid + 1 : 1;

    return 'uid' + this.uid;
  }

  _events() {
    // doc events

    $('.image_sequence').on('mouseenter', (evt) => {
      // set off image sequence

      let flag = this._uid();
      let index = $('.sequence.active').index();
      if (index == -1) {
        index = 0;
      }

      $(evt.currentTarget).find('.sequence').each((i, e) => {
        $(e).data('flag', flag);

        if (i >= index) {
          setTimeout(
            () => {
              if ($(e).data('flag') == flag) {
                $('.sequence').removeClass('active');
                $(e).addClass('active');
              }
            },
            (i - index) * this.frameInterval
          );
        }
      });
    });

    $('.image_sequence').on('mouseleave', (evt) => {
      // revert image sequence

      let flag = this._uid();
      let index = $('.sequence.active').index();
      if (index == -1) {
        index = $(evt.currentTarget).find('.sequence').length - 1;
      }
      const max = this.frameInterval * index;

      $(evt.currentTarget).find('.sequence').each((i, e) => {
        $(e).data('flag', flag);

        if (i <= index) {
          setTimeout(
            () => {
              if ($(e).data('flag') == flag) {
                $('.sequence').removeClass('active');
                $(e).addClass('active');
              }
            },
            max - (i * this.frameInterval)
          );
        }
      });
    });
  }
}

export default Menu;
