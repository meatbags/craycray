import * as module from './modules';

class App {
  constructor() {
    this.menu = new module.Menu();
    this.eye = new module.Eye();
    this.loading = new module.Loading();
  }
}

window.onload = () => {
  const app = new App();
};
