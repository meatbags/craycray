class Loading {
  constructor() {
    // deferred load
    $('.defer-load').each(function(i, e) {
      const $e = $(e);
      e.onload = () => { $e.removeClass('defer-load'); };
      $e.attr('src', $e.data('src'));
    });
  }
}

export default Loading;
