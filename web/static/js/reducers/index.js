import { combineReducers }  from 'redux';
// will automatically set routing changes into the state
import { routerReducer as routing }    from 'react-router-redux';
import session              from './session';

const rootReducer = combineReducers({
  routing,
  session,
});

export default rootReducer;
