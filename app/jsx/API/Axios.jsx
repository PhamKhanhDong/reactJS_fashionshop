import axios from 'axios';

$(document).on('ready', function() {
});
export default class Axios {
  static callAjax(callback, options) {
  axios.defaults.headers.common["X-CSRF-TOKEN"] = document.getElementsByName("csrf-token")[0].attributes.content.value;
  // console.log(axios.defaults.headers.common["X-CSRF-TOKEN"]);
    options.url = "/api/v1/" + options.url;
    axios(options).then(function(response){

      if (response.error) {
        if (!response.data) {
          console.log(" connect error");
        }
      }

      if (callback) {
        callback(response.status, response.data);
      }
    })
    .catch = (error) => {
      console.log(error);
      if (error.status == 422 || error.status == 401) {
        console.log("need login");
        return false;
      }

      console.log(" connect error");

      if (callback) {
        callback(false);
      }
    }
  }
}
