import { createStore, applyMiddleware } from 'redux';
import createLogger                     from 'redux-logger';
import thunkMiddleware                  from 'redux-thunk';
import { routerMiddleware }             from 'react-router-redux';
import reducers                         from '../reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore(browserHistory) {
  // to dispatch router actions to the store.
  const reduxRouterMiddleware = routerMiddleware(browserHistory);
  // thunk - to dispatch async actions.
  // logger - to log any actions and state changes in console.
  const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunkMiddleware, loggerMiddleware)(createStore);
  return createStoreWithMiddleware(reducers);
}
