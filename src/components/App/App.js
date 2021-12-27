import Sculpture from "../Sculpture/Sculpture";

import "./App.css";

class App {
  async render() {
    await Sculpture.render();
  }
}

export default new App();
