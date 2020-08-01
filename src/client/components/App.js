import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store'


import Login from "./Login";
import Chat from "./Chat";


export default ({ }) => (
  <Provider store={store}>
      <HashRouter>
          <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/chat' component={Chat} />
              <Redirect from='/' to='/login' />
          </Switch>
      </HashRouter>
  </Provider>
);
