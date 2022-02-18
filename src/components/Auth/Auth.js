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
  const html = `
      <div class="${classes.auth__wrapper}" >
        <div class="${classes.auth__container}">
        <span class="${classes.auth__span}">ВХОД</span>
         <form class="${classes.enter__form}" id="enter-form">
          <div class="${classes.auth__input}">
           <input  type="email" id="email" required>
           <label class="${classes.auth__label}" for="email">EMAIL</label>
          </div>
          <div class="${classes.auth__input}">
           <input type="password" id="password"required>
           <label class="${classes.auth__label}" for="password">ПАРОЛЬ</label>
          </div>
          <button type="submit" class="${classes.auth__submit}" id="btn">Войти</button>
         </form>
        </div>
        <button class="btn btn-contain ${classes.auth__btn}" 
        onclick = "modal.innerHTML = ''"
        style="background-image: url(${closeWhite})"></button>
      </div>
      
      `;
  ROOT_MODAL.innerHTML = html;
}
//функция для работы с данными авторизации
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

//функция для работы с данными входа
function enterEmailAndPassword(email, password) {
  const apiKey = "AIzaSyDhmHw1vcPxiuoXHyqqQ1sJfNDJ64PWq-s";
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.idToken);
}
//рендеринг модального окна после входа
function openAfterEnterModal(idToken) {
  const html = `
    <div class="${classes.auth__wrapper}">
      <div class="${classes.auth__postmodal}">
       <span class="${classes.auth__postenter}">Вы выполнили вход как авторизованный пользователь</span>
       <span class="${classes.auth__postenter}">Оставьте комментарий о городской скульптуре Таганрога</span>
       <span class="${classes.auth__postsubmit}">Оставить комментарий</span>
      </div>
      <button class="btn btn-contain ${classes.auth__btn}" 
      onclick = "modal.innerHTML = ''"
      style="background-image: url(${closeWhite})"></button>
    </div>
  
  `;
  ROOT_MODAL.innerHTML = html;
}

//рендеринг модального окна поставторизации
function openAfterAuthModal(localId) {
  const html = `
    <div class="${classes.auth__wrapper}">
      <div class="${classes.auth__postmodal}">
       <span class="${classes.auth__postspan}">Регистрация прошла успешно</span>
       <span class="${classes.auth__postspan}">Ваш ID пользователя: ${localId}</span>
      </div>
      <button class="btn btn-contain ${classes.auth__btn}" 
      onclick = "modal.innerHTML = ''"
      style="background-image: url(${closeWhite})"></button>
    </div>
  
  `;
  ROOT_MODAL.innerHTML = html;
}
//функция для работы с данными входа
function enterHandler(e) {
  e.preventDefault();
  const email = e.target.querySelector("#email").value;
  const password = e.target.querySelector("#password").value;
  const btn = e.target.querySelector("#btn");

  btn.disabled = true;

  enterEmailAndPassword(email, password)
    .then((idToken) => openAfterEnterModal(idToken))
    .then(() => (btn.disabled = false));
}
//функция для работы с данными формы
function authHandler(e) {
  e.preventDefault();
  const email = e.target.querySelector("#email").value;
  const password = e.target.querySelector("#password").value;
  const btn = e.target.querySelector("button");

  btn.disabled = true;

  authEmailAndPassword(email, password)
    .then((localId) => openAfterAuthModal(localId))
    .then(() => (btn.disabled = false));
}
//функция рендеринга окна регистрации
function renderAuthModal() {
  openAuthModal();
  document.getElementById("auth-form").addEventListener("submit", authHandler);
}
//функция рендеринга окна входа
function renderOpenModal() {
  openAuthEnter();
  document
    .getElementById("enter-form")
    .addEventListener("submit", enterHandler);
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
      renderAuthModal();
    });
  }
  enterListener() {
    const element = document.getElementById("enter");
    element.addEventListener("click", () => {
      renderOpenModal();
    });
  }
}
export default new Auth();
