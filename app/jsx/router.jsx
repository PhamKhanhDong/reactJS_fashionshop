import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Index from "./Home/Index"
import Login from "./Login/Index"


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Index} ></Route>
    <Route path="/login" component={Login} ></Route>
  </Router>
);

export default router;
