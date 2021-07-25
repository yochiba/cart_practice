import { createStore, combineReducers, compose, Reducer } from 'redux';
import persistState from 'redux-localstorage';
import { accountReducer, AccountState} from './Account';
import { cartReducer, CartState} from './Cart';
import { purchaseHistoryReducer, PurchaseHistoryState} from './PurchaseHistory';
import { deliveryReducer, DeliveryState} from './Delivery';
import { purchaseSessionReducer, PurchaseSessionState } from './PurchaseSession';

export type AppState = {
  accountStore: AccountState;
  cartStore: CartState;
  purchaseSessionStore: PurchaseSessionState;
  purchaseHistoryStore: PurchaseHistoryState;
  deliveryStore: DeliveryState;
};

const reducer: Reducer = combineReducers<AppState>({
  accountStore: accountReducer,
  cartStore: cartReducer,
  purchaseSessionStore: purchaseSessionReducer,
  purchaseHistoryStore: purchaseHistoryReducer,
  deliveryStore: deliveryReducer,
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