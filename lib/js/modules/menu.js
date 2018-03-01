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

  toggleDropdown(parent) {
    // open, close dropdown menu

    if (!parent.hasClass('active')) {
      $('.cat-parent.active').removeClass('active');
      parent.addClass('active');
      $('.drop-down-item').addClass('display-none');
      $(parent.data('name')).removeClass('display-none');
    }
  }

  filter(elem) {
    // filter projects

    if (!this.lockFilter && !elem.hasClass('active')) {
      this.lockFilter = true;

      // menu style

      $('.drop-down-item.active').removeClass('active');
      elem.addClass('active');

      // fade out, rearrange columns, fade in

      $('.item').addClass('fade-out');

      setTimeout(() => {
        this.applyFilter(elem.data('filter'));
        this.lockFilter = false;
      }, 500);
    }
  }

  resetFilters() {
    // reset filters, show featured

    if (isHome && !this.lockFilter && $('.cat-parent').hasClass('active')) {
      this.lockFilter = true;
      $('.drop-down-item.active, .cat-parent.active').removeClass('active');
      $('.item').addClass('fade-out');

      setTimeout(() => {
        this.applyFilter('.filter-featured');
        this.lockFilter = false;
      }, 500);
    }
  }

  applyFilter(selector) {
    // apply filter string to project items

    $('.item').addClass('display-none');
    $(selector).each((i, e) => {
      const $e = $(e);
      $(`.column:eq(${i % 3})`).append($e);
      $e.removeClass('display-none');

      setTimeout(() => { $e.removeClass('fade-out'); }, 100);
    });
  }

  events() {
    // doc events

    $('.nav-logo').on('click', (e) => {
      this.resetFilters();
    });
    $('.cat-parent').on('click', (e) => {
      this.toggleDropdown($(e.currentTarget));
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
