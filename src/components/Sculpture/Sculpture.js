import {
  URL,
  URI,
  URI1,
  URI2,
  URI3,
  URI4,
  URI5,
  URI6,
  URI7,
  URI8,
  URI9,
  URI10,
  URI11,
  URI12,
} from "../../../constants/url";

import { ROOT_INDEX } from "../../../constants/root";

import { getDataApi } from "../../../utils/getDataApi";

import Error from "../Error/Error";

import * as classes from "./Sculpture.css";

class Sculpture {
  renderSculpture(data) {
    let htmlContent = ``;
    data.forEach(({ id, name, img, place, year, sculptureName }) => {
      htmlContent += `
        <li class = "sculpture__li ${classes.sculpture__item}" data-id = "${id}")">
            <span class = "${classes.sculpture__name}">${name}</span>
            <img class = "img-contain ${classes.sculpture__img}" src = "${img}"/>
        
        </li>
      
      `;
    });
    const htmlWrapper = `
        <ul class = "${classes.sculpture__container}">${htmlContent}</ul>
    
    `;
    ROOT_INDEX.innerHTML = htmlWrapper;
  }
  async render() {
    const data = await getDataApi.getData(URL);

    data ? this.renderSculpture(data) : Error.render();
  }

  eventListener() {
    document.querySelectorAll(".sculpture__li").forEach((element) => {
      const id = element.getAttribute("data-id");
      element.addEventListener("click", () => {
        console.log(id);
      });
    });
  }
}
export default new Sculpture();
