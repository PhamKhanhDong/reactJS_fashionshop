export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {
      email: "",
      password: ""
    }};
    // this.handleLogin = this.handleLogin.bind(this);
    this.handleChangeInputField = this.handleChangeInputField.bind(this);
    this.handleKeyDownSubmit = this.handleKeyDownSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInputField(fieldName) {
    this.state.user[fieldName] = this.refs[fieldName].value
    this.setState({user: this.state.user});

  }


  handleKeyDownSubmit(event) {
    if(event.keyCode===13){
      console.log(this.state.user);
    }
  }

  handleSubmit() {
     API.Authenticate.login(this.handleLogin, this.state.user);
  }

  handleLogin(status, response) {
    console.log(response.data);
  }

  render() {
    return (
      <div className="container">
        <div id="content">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <h4>{t("users.log_in")}</h4>
              <div className="space20">&nbsp;</div>
              <div className="form-block">
                <label>{t("users.email")}</label>
                <input type="email" ref="email"
                  value={this.state.user.email}
                  onKeyDown={this.handleKeyDownSubmit}
                  onChange={()=>this.handleChangeInputField("email")}
                />
              </div>
              <div className="form-block">
                <label>{t("users.password")}</label>
                <input type="password" ref="password"
                  className="session_password"
                  value={this.state.user.password}
                  onKeyDown={this.handleKeyDownSubmit}
                  onChange={()=>this.handleChangeInputField("password")}
                />
              </div>
              <div className="form-block">
                <input
                  type="button"
                  value={t("users.log_in")}
                  className="btn btn-lg btn-primary btn-block"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
