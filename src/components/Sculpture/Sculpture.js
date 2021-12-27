import { URL } from "../../../constants/url";

import { ROOT_INDEX } from "../../../constants/root";

import { getDataApi } from "../../../utils/getDataApi";

import * as classes from "./Sculpture.css";

class Sculpture {
  async render() {
    const data = await getDataApi.getData(URL);

    let htmlContent = ``;
    data.forEach(({ id, name, img }) => {
      console.log(id, name, img);

      htmlContent += `
        <li class = "${classes.sculpture__item}">
            <span class = "${classes.sculpture__name}">${name}</span>
            <img class = "${classes.sculpture__img}" src = "${img}"/>
        
        </li>
      
      `;
    });
    const htmlWrapper = `
        <ul class = "${classes.sculpture__container}">${htmlContent}</ul>
    
    `;
    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Sculpture();
