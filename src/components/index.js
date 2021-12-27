import App from "./App/App";

import Sculpture from "./Sculpture/Sculpture";

(async () => {
  await App.render();
  Sculpture.eventListener();
})();
