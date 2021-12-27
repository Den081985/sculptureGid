/*handleSetLocationStorage(element, id) {
    const { pushProducts, products } = localStorageUtil.putProducts(id);

    if (pushProducts) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }*/

import { URL } from "../../../constants/url";

import { getDataApi } from "../../../utils/getDataApi";

class Description {

    describe(element, id) {
        if(id) {
            element.innerHTML = 
        }

    }

  async render() {
    const data = await getDataApi.getData(URL);
  }
}
