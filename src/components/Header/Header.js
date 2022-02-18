import { ROOT_HEADER } from "../../../constants/root";

import * as classes from "./Header.css";

class Header {
  render() {
    const htmlContent = `
        <div class = "${classes.header__container}">
            <span class = "${classes.header__span}">Городская скульптура Таганрога</span>
            <div class="${classes.header__items}">
                  <span id="auth" class=" ${classes.header__item}" data-id="auth">Регистрация</span>
                  <span id="enter"class="${classes.header__item}" data-id="enter">Войти</span>
                  <span id="comment"class="${classes.header__item}" data-id="comment">Комментарии</span>
                </div>
        </div>
      
      `;
    ROOT_HEADER.innerHTML = htmlContent;
  }
}

export default new Header();
