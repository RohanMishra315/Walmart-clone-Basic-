import { createStore, combineReducers} from 'redux';
import cartReducer from './Reducer/Reducer';

const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(rootReducer);

export default store;