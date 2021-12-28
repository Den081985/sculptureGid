import { URL } from "../../../constants/url";

import { ROOT_INDEX } from "../../../constants/root";

import { getDataApi } from "../../../utils/getDataApi";

import Description from "../Description/Description";

import Error from "../Error/Error";

import * as classes from "./Sculpture.css";

class Sculpture {
  renderSculpture(data) {
    let htmlContent = ``;
    data.forEach(({ id, name, img }) => {
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
      element.addEventListener("click", async () => {
        if (id === "el1") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/8bs9"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el2") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/da0x"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el3") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/bs0h"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el4") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/bzq9"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el5") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/fg19"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el6") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/989p"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el7") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/7atp"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el8") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/ig25"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el9") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/3nnh"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el10") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/cnq5"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el11") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/8lw5"
          );
          Description.render(place, year, sculptureName, img);
        } else if (id === "el12") {
          const { place, year, sculptureName, img } = await getDataApi.getData(
            "http://myjson.dit.upm.es/api/bins/d3xh"
          );
          Description.render(place, year, sculptureName, img);
        }
      });
    });
  }
}
export default new Sculpture();
