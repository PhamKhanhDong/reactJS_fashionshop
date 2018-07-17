import Menu from "./Menu"
export default class Header extends React.Component {
  render() {
    return(
      <div>
        <div className="header-top">
          <div className="container">
            <div className="pull-left auto-width-left">
              <ul className="top-menu menu-beta l-inline">
                <li>
                  <a href="">
                    <i className="fa fa-home"></i>
                    {t("header.address_store")}
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-phone"></i>
                    {t("header.hot_line")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="pull-right auto-width-right">
              <ul className="top-details menu-beta l-inline">
                <li>
                  <a href="/login">{t("header.log_in")}</a>
                </li>
                <li>
                  <a >{t("header.sign_up")}</a>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="header-body">
          <div className="container beta-relative">
            <div className="pull-left">
              <a href="/">
                <img src="/assets/no_image.png" alt="logo" className="logo"/>
              </a>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <Menu/>
      </div>
    );
  }
}
