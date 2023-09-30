import { createStore, combineReducers} from 'redux';
import listReducer from './reducers/listReducer';
import formReducer from './reducers/formReducer';
 
const rootReducer = combineReducers({
  list: listReducer,
  form: formReducer,
});
 
export const store = createStore(rootReducer);