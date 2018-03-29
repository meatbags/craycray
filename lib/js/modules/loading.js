class Loading {
  constructor() {
    // deferred load
    this.checkLoaded();
    $('.defer-load').each((i, e) => {
      const $e = $(e);
      e.onload = () => {
        $e.removeClass('defer-load');
        this.checkLoaded();
      };
      $e.attr('src', $e.data('src'));
    });
  }

  checkLoaded() {
    $('.loading').each((i, e) => {
      if (!$(e).find('.defer-load').length) {
        $(e).removeClass('loading');
      }
    });
  }
}

export { Loading };
