import { ROOT_INDEX } from "../../../constants/root";

import * as classes from "./Error.css";

class Error {
  render() {
    const htmlWrapper = `
        <div class = "${classes.error__container}">
            <span>
                <p class = "${classes.error__alert}">Произошла ошибка.Попробуйте перезагрузить страницу</p>
            </span>
        
        </div>
      
      `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();
