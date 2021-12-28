import Sculpture from "../Sculpture/Sculpture";

import "./App.css";

import Header from "../Header/Header";

class App {
  async render() {
    Header.render();
    await Sculpture.render();
  }
}

export default new App();
