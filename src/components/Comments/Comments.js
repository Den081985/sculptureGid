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

//функция валидации данных
function isValid(value) {
  return value.length >= 5;
}

function commentHandler(e) {
  e.preventDefault();

  const area = document.querySelector("#comment-area");
  const name = document.querySelector("#name");
  const btn = document.querySelector(".commentSubmit");

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
}

export default new Comments();
