import Axios from "./Axios";

export default class Authenticate extends Axios {
  static login(callback, data) {
    this.callAjax(callback, {
      url: "login",
      method: "POST",
      data: data
    });
  }
}
