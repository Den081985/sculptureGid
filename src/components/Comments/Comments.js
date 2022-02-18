//компонент для работы с комментариями
import { ROOT_MODAL } from "../../../constants/root";
import * as classes from "./Comments.css";
import closeWhite from "../Images/icons8-удалить.svg";
export function openCommentsModal() {
  const html = `
    <div class="${classes.comment__wrapper}">
        
      <div class="${classes.comment__container}">
        <span class="${classes.comment__span}">Оставить комментарий</span>
        <form class="${classes.comment__form}" id="auth-form">
          <div class="${classes.comment__area}">
            <textarea  
            id="comment-area"
            rows="10"
            cols="45"
            required
            placeholder="Comment..."></textarea>
          </div>
         <button type="submit" class="${classes.comment__submit}">Отправить</button>
        </form>
      </div>
        <button class="btn btn-contain ${classes.comment__btn}" 
        onclick = "modal.innerHTML = ''"
        style="background-image: url(${closeWhite})"></button>
    </div>      
    `;
  ROOT_MODAL.innerHTML = html;
}

//класс для работы с комментариями
class Comments {}

export default new Comments();
