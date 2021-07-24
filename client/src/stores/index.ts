import { createStore, combineReducers, compose, Reducer } from 'redux';
import persistState from 'redux-localstorage';
import { AccountReducer, AccountState} from './Account';
import { CartReducer, CartState} from './Cart';
import { PurchaseSessionsReducer, PurchaseSessionsState} from './PurchaseSessions';

export type AppState = {
  accountStore: AccountState,
  cartStore: CartState,
  purchaseSessionsStore: PurchaseSessionsState,
};

const reducer: Reducer = combineReducers<AppState>({
  accountStore: AccountReducer,
  cartStore: CartReducer,
  purchaseSessionsStore: PurchaseSessionsReducer,
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