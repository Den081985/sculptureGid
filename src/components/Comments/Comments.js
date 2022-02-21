//компонент для работы с комментариями
import { ROOT_MODAL } from "../../../constants/root";
import * as classes from "./Comments.css";
import closeWhite from "../Images/icons8-удалить.svg";
export function openCommentsModal() {
  const html = `
    <div class="${classes.comment__wrapper}">
        
      <div class="${classes.comment__container}">
        <span class="${classes.comment__span}">Оставить комментарий</span>
        <form class="comment-form ${classes.comment__form}" id="comment-form">
          <div class="${classes.comment__input}">
            <input  type="text" id="name" required>
            <label for="name" class="${classes.comment__label}">ФИО</label>
          </div>
          <div class="textarea ${classes.comment__area}">
            <textarea  
            id="comment-area"
            rows="10"
            cols="45"
            required
            placeholder="Comment..."></textarea>
          </div>
         <button type="submit" class="commentSubmit ${classes.comment__submit}">Отправить</button>
        </form>
        
      </div>
        <button class="btn btn-contain ${classes.comment__btn}" 
        onclick = "modal.innerHTML = ''"
        style="background-image: url(${closeWhite})"></button>
    </div>      
    `;
  ROOT_MODAL.innerHTML = html;
}
//функция для работы с локалсторадж
function getCommentFromStorage() {
  return JSON.parse(localStorage.getItem("comments") || "[]");
}

//функция для работы с локалсторадж
function putCommentToStorage(comment) {
  const comments = getCommentFromStorage();
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}
//функция рендеринга модального окна комментария
function renderComment(comment) {
  return `
    
    <div class="${classes.comment__name}">${comment.name}</div>
    <div class="${classes.comment__date}">
    ${new Date(comment.date).toLocaleString()}
    ${new Date(comment.date).toLocaleTimeString()}
    </div>
    <div class="${classes.comment__body}">"${comment.comment}"</div>
   
  `;
}
//функция рендеринга комментариев

//функция для запроса комментария в базу данных
function fetchComment(comment) {
  return fetch(
    "https://sculpture-page-default-rtdb.firebaseio.com/sculpturecomments.json",
    {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json)
    .then((response) => {
      comment.id = response.name;
      return comment;
    })
    .then(putCommentToStorage);
}
//функция для получения комментариев из базы данных
export function getComments() {
  return fetch(
    `https://sculpture-page-default-rtdb.firebaseio.com/sculpturecomments.json`
  )
    .then((response) => response.json())

    .then((content) => {
      return content
        ? Object.keys(content).map((key) => ({
            ...content[key],
            id: key,
          }))
        : [];
    });
}

export function activateModal(content) {
  const html = `
    <div  class="${classes.comment__wrapper}">
      <div class="${classes.comment__container}">${content}</div>
      <button class="btn btn-contain ${classes.comment__btn}" 
        onclick = "modal.innerHTML = ''"
        style="background-image: url(${closeWhite})"></button>
    </div>
  `;
  ROOT_MODAL.innerHTML = html;
}

//функция валидации данных
function isValid(value) {
  return value.length >= 5;
}

function commentHandler(e) {
  e.preventDefault();

  const area = document.querySelector("#comment-area");
  const name = document.querySelector("#name");
  const btn = document.querySelector(".commentSubmit");
  const modal = document.querySelector("#modal");
  if (isValid(area.value)) {
    const comment = {
      name: name.value.trim(),
      comment: area.value.trim(),
      date: new Date().toJSON(),
    };

    btn.disabled = true;

    fetchComment(comment).then(() => {
      area.value = "";
      name.value = "";
      modal.innerHTML = "";
      btn.disabled = false;
    });
  }
}

//функция рендеринга окна комментариев
function renderCommentModal() {
  openCommentsModal();
  document
    .getElementById("comment-form")
    .addEventListener("submit", commentHandler);
}

//класс для работы с комментариями
class Comments {
  listener() {
    const com = document.getElementById("comment");
    com.addEventListener("click", () => {
      renderCommentModal();
    });
  }
  render(comments) {
    return comments
      ? `<ul class="${classes.cpmment__list}">${comments
          .map(
            (comment) =>
              `<li class="${classes.commet__li}">${renderComment(comment)}</li>`
          )
          .join("")}</ul>`
      : "<p>КОММЕНТАРИЕВ НЕТ</p>";
  }
}

export default new Comments();
