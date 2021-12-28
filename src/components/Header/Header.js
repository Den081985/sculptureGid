import { ROOT_HEADER } from "../../../constants/root";

import * as classes from "./Header.css";

class Header {
  render() {
    const htmlContent = `
        <div class = "${classes.header__container}">
            <span class = "${classes.header__span}">Городская скульптура Таганрога</span>
        </div>
      
      `;
    ROOT_HEADER.innerHTML = htmlContent;
  }
}

export default new Header();
