import { ROOT_MODAL } from "../../../constants/root";

import * as classes from "./Description.css";

import closeWhite from "../Images/icons8-удалить.svg";

class Description {
  render(place, year, sculptureName, img) {
    const htmlContent = `
      <div class = "${classes.description__wrapper}">
          <div class = "${classes.description__container}">
        
            <div "${classes.description__imgContainer}">
              <img class = "img-cover ${classes.description__img}"src = "${img}"/>
            </div>
            <div class = "${classes.description__spanContainer}">
              <span class = "${classes.description__span}">${place}</span>
              <span class = "${classes.description__span}">Год установки: ${year}</span>
              <span class = "${classes.description__span}">Скульптор: ${sculptureName}</span>
            </div>
            <div class = "${classes.description__buttonContainer}">
             <button class = "btn ${classes.description__button}">Подробнее</button>
            </div>

          </div>
          
          <button 
          class = "btn btn-contain ${classes.description__btn}"
          onclick = "modal.innerHTML = ''"
          style = "background-image: url(${closeWhite})"
          ></button>
      </div>
    
    `;
    ROOT_MODAL.innerHTML = htmlContent;
  }
}

export default new Description();
