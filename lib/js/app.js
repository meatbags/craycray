import * as module from './modules';

class App {
  constructor() {
    this.menu = new module.Menu();
  }
}

window.onload = () => {
  const app = new App();
};
