import Axios from "./Axios"

export default class Product
{
  static getNewProduct(callback) {
    Axios.callAjax(callback, {
      url: "get-new-product",
      method: "GET",
      data: {}
    });
  }
}
