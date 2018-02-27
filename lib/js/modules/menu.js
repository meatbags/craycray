class Menu {
  constructor() {
    // menu handler

    this.fps = 12;
    this.frameInterval = 1000 / this.fps;
    this.projectPane = $('.project-pane');
    this.events();
  }

  _uid() {
    // get unique id

    this.uid = this.uid ? this.uid + 1 : 1;

    return 'uid' + this.uid;
  }

  openProject(project) {
    // open project pane + new content

    this.projectPane.find('.project-pane__inner').html(project.html());
    this.projectPane.addClass('active');
    $('.wrapper').addClass('hidden');
    $('body').addClass('active');
  }

  closeProject() {
    // close project pane

    this.projectPane.removeClass('active');
    $('.wrapper').removeClass('hidden');
    $('body').removeClass('active');
  }

  events() {
    // doc events

    $('.project-pane').on('click', '.back-to-projects', (e) => {
      // close project pane

      this.closeProject();
    });
    $('.item').on('click', (e) => {
      // open project in pane

      const target = $(e.currentTarget);
      const id = target.find('.item__inner').data('id');
      const project = $(id);
      this.openProject(project);
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
