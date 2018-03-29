import * as module from './modules';

class App {
  constructor() {
    this.menu = new module.Menu();
    this.eye = new module.Eye();
    this.loading = new module.Loading();
    if (!isHome) {
      this.images = new module.Images();
    }
  }
}

window.onload = () => {
  const app = new App();
};
