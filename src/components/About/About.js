import { ROOT_MODAL } from "../../../constants/root";

import * as classes from "./About.css";

import closeWhite from "../Images/icons8-удалить.svg";

class About {
  render(describe) {
    const htmlContent = `
       <div class = "${classes.about__wrapper}">
          <div class = "${classes.about__container}">
            <span class = "${classes.about__text}">"${describe}"</span>
            <button 
            class = "btn btn-contain ${classes.about__btn}"
            onclick = "modal.innerHTML = ''"
            style = "background-image: url(${closeWhite})"
              ></button>       
          </div>
       </div>
    
    
    `;

    ROOT_MODAL.innerHTML = htmlContent;
  }
}

export default new About();
