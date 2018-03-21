class Loading {
  constructor() {
    // deferred load
    $('.defer-load').each(function(i, e) {
      $(e).attr('src', $(e).data('src'));
    });
  }
}

export default Loading;
