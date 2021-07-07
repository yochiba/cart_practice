import { createStore, combineReducers, compose, Reducer } from 'redux';
import persistState from 'redux-localstorage';
import { AccountReducer, AccountState} from './Account';
import { CartReducer, CartState} from './Cart';

export type AppState = {
  accountStore: AccountState,
  cartStore: CartState,
};

const reducer: Reducer = combineReducers<AppState>({
  accountStore: AccountReducer,
  cartStore: CartReducer,
});

const enhancer = compose(
    persistState(

    ),
  )

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  enhancer,
);

export default store;