class Menu {
  constructor() {
    // menu handler

    this.fps = 12;
    this.frameInterval = 1000 / this.fps;
    this.events();
  }

  _uid() {
    // get unique id

    this.uid = this.uid ? this.uid + 1 : 1;
    return 'uid' + this.uid;
  }

  toggleDropdown() {
    // open, close dropdown menu

    $('.drop-down').toggleClass('active');
  }

  filter(elem) {
    // filter projects

    $('.drop-down-item.active').removeClass('active');
    elem.addClass('active');
  }

  events() {
    // doc events

    $('.nav-work').on('click', () => {
      this.toggleDropdown();
    });
    $('.drop-down-item').on('click', (e) => {
      this.filter($(e.currentTarget));
    });
    $('.image_sequence').on('mouseenter', (evt) => {
      // trigger image sequence

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
      // revert image sequence to first state

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
