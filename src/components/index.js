import App from "./App/App";
import Comments from "./Comments/Comments";
import Sculpture from "./Sculpture/Sculpture";
import Auth from "./Auth/Auth";

(async () => {
  await App.render();
  Sculpture.eventListener();
  Auth.authListener();
  Auth.enterListener();
  Comments.listener();
})();
