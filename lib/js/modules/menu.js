class Menu {
  constructor() {
    // menu handler
    this.fps = 12;
    this.frameInterval = 1000 / this.fps;
    this.events();

    // hash reference
    if (isHome) {
      if (window.location.hash) {
        var hash = '.hash-' + window.location.hash.split('#')[1];
        if ($(hash).length) {
            $(hash).click();
            var parent = $(hash).data('parent');
            $('.cat-parent').each((i, e) => {
              if ($(e).data('name') == parent) {
                $(e).click();
              }
            });
        } else {
          $('.fade-out').removeClass('fade-out');
        }
      } else {
        $('.fade-out').removeClass('fade-out');
      }
    } else {
      // modify home href to preserve hash
      if (window.location.hash) {
        $('.home-button a').attr('href', $('.home-button a').attr('href') + window.location.hash);
      }
    }

    // initial filter
    this.applyFilter('.filter-featured');
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

      // hash reference
      window.location.hash = elem.data('hash');

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
      $('.cat-parent.active').removeClass('active');
      $('.drop-down-item.active').removeClass('active');
      $('.drop-down-item').addClass('display-none');
      $('.item').addClass('fade-out');
      setTimeout(() => {
        this.applyFilter('.filter-featured');
        window.location.hash = '';
        this.lockFilter = false;
      }, 500);
    }
  }

  applyFilter(selector) {
    console.log('Filter:', selector);

    // hide
    $('.item').addClass('display-none');

    // get targets ordered by menu order
    const ordered = [];
    const target = document.querySelectorAll(selector);
    target.forEach(el => {
      const $el = $(el);
      const index = parseInt(el.dataset.menuIndex);
      ordered.push({$el: $el, index: index});
    });
    ordered.sort((a, b) => (a.index < b.index || a.index == b.index) ? 1 : -1);

    // apply filter
    for (let i=0; i<ordered.length; i++) {
      const $e = ordered[i].$el;
      $(`.column:eq(${i % 3})`).append($e);
      $e.removeClass('display-none');
      setTimeout(() => {
        $e.removeClass('fade-out');
      }, 100);
    }
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
      const target = $(evt.currentTarget);
      if (!target.find('.defer-load').length) {
        const targetClass = target.data('class');
        let flag = this._uid();
        let index = $(`${targetClass}.active`).index();
        if (index == -1) {
          index = 0;
        }
        $(evt.currentTarget).find(targetClass).each((i, e) => {
          $(e).data('flag', flag);
          if (i >= index) {
            setTimeout(
              () => {
                if ($(e).data('flag') == flag) {
                  $(targetClass).removeClass('active');
                  $(e).addClass('active');
                }
              },
              (i - index) * this.frameInterval
            );
          }
        });
      }
    });
    $('.image_sequence').on('mouseleave', (evt) => {
      // revert image sequence to first state
      const target = $(evt.currentTarget);
      if (!target.find('.defer-load').length) {
        const targetClass = $(evt.currentTarget).data('class');
        let flag = this._uid();
        let index = $(`${targetClass}.active`).index();
        if (index == -1) {
          index = $(evt.currentTarget).find(targetClass).length - 1;
        }
        const max = this.frameInterval * index;

        $(evt.currentTarget).find(targetClass).each((i, e) => {
          $(e).data('flag', flag);
          if (i <= index) {
            setTimeout(
              () => {
                if ($(e).data('flag') == flag) {
                  $(targetClass).removeClass('active');
                  $(e).addClass('active');
                }
              },
              max - (i * this.frameInterval)
            );
          }
        });
      }
    });

    // rewrite a tags to include hash reference
    this.formatLinks = () => {
      var hash = window.location.hash;

      if (isHome) {
        $('.item a').each((i, e) => {
          var href = $(e).attr('href');
          if (href.indexOf('#')) {
            href = href.split('#')[0] + hash;
          } else {
            href += hash;
          }
          $(e).attr('href', href);
        });
      }
    };
    $(window).on('hashchange', () => { this.formatLinks(); });
    this.formatLinks();
  }
}

export { Menu };
