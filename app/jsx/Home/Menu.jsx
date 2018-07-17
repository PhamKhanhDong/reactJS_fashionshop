export default class Menu extends React.Component {
  render() {
    return(
      <div className="header-bottom">
        <div className="container">
          <nav className="main-menu">
            <ul className="l-inline ov">
              <li><a>{t("nav.home")}</a></li>
              <li><a>{t("nav.categories")}</a></li>
              <li><a>{t("nav.brands")}</a></li>
              <li><a>{t("nav.hot")}</a></li>
              <li><a>{t("nav.new")}</a></li>
              <li><a>{t("nav.introduce")}</a></li>
              <li><a>{t("nav.contact")}</a></li>
            </ul>
            <div className="clearfix"></div>
          </nav>
        </div>
      </div>
    );
  }
}
