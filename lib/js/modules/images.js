class Images {
  constructor() {
    // image resizing
    $('.feat-item').each((i, e) => {
      var height = $(e).height();
      var img = $(e).find('img');
      if (img.height() < height) {
        img.css({height: '100%', width: 'auto'});
      }
    });
  }
}

export { Images };
