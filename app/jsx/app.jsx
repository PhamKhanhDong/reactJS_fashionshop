import ReactDOM from "react-dom";
<<<<<<< f5cdf11c574988792b02ecdce91192213e1dfd1e
import Test from "./Test"

$(document).on('ready', function() {
  // ReactDOM.render(
  //   <div>a</div>,
  //   document.getElementById("header")
  // );
=======
import router from "./router";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

global.API = require("./API");


import Locales from "./Locales";
  t.registerTranslations("en", Locales.English);
  t.registerTranslations("ja", Locales.Japanese);
  t.setLocale(config.locale || "en");
  t.setFallbackLocale("en");

$(document).on('turbolinks:load', function() {
  ReactDOM.render(<Header/>, document.getElementById("header"));
  ReactDOM.render(router, document.getElementById("react-wrapper"));
  ReactDOM.render(<Footer/>, document.getElementById("footer"));
>>>>>>> reactjs login
});
