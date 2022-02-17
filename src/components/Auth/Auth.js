import * as classes from "./Auth.css";

import { ROOT_MODAL } from "../../../constants/root";
import closeWhite from "../Images/icons8-удалить.svg";

//компонент для работы с авторизацией

//ренедеринг окна авторизации

export function openAuthModal() {
  const html = `
      <div class="${classes.auth__wrapper}">
        
        <div class="${classes.auth__container}">
        <span class="${classes.auth__span}">РЕГИСТРАЦИЯ</span>
        <form class="${classes.auth__form}" id="auth-form">
        <div class="${classes.auth__input}">
          <input  type="text" id="name" required>
          <label for="name" class="${classes.auth__label}">ФИО</label>
        </div>
        <div class="${classes.auth__input}">
          <input type="email" id="email" required>
          <label for="email" class="${classes.auth__label}">EMAIL</label>
        </div>
        <div class="${classes.auth__input}">
          <input type="password" id="password" required>
          <label for="password" class="${classes.auth__label}">ПАРОЛЬ</label>
        </div>
        <button type="submit" class="${classes.auth__submit}">Отправить</button>
        </form>
        </div>
        <button class="btn btn-contain ${classes.auth__btn}" 
        onclick = "modal.innerHTML = ''"
        style="background-image: url(${closeWhite})"></button>
      </div>      
      `;
  ROOT_MODAL.innerHTML = html;
}

//рендеринг окна входа

export function openAuthEnter() {
  return `
      <form class="${classes.enter__form}" id="enter-form">
      <div class="${classes.enter__email}">
        <input type="email" id="email" required>
        <label for="email">EMAIL</label>
      </div>
      <div class="${classes.enter__password}">
        <input type="password" id="password"required>
        <label for="password">ПАРОЛЬ</label>
      </div>
      <button type="submit" class="${enter__btn}">Войти</button>
    </form>
      
      `;
}

export function authEmailAndPassword(email, password) {
  const apiKey = "AIzaSyDhmHw1vcPxiuoXHyqqQ1sJfNDJ64PWq-s";
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.localId);
}

// export function activateModal(title, content) {
//   const html = `
//           <div class="modal__title">${title}</div>
//           <div class="modal__content">${content}</div>
//       `;
//   ROOT_MODAL.innerHTML = html;
// }

// export function renderAuthModal() {
//   activateModal("АВТОРИЗАЦИЯ", openAuthModal());
// }

class Auth {
  authListener() {
    const element = document.getElementById("auth");
    element.addEventListener("click", () => {
      openAuthModal();
    });
  }
}
export default new Auth();
