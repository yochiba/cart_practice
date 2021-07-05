import { createStore, combineReducers, compose, Reducer } from 'redux';
import persistState from 'redux-localstorage';
import { AccountReducer, AccountState} from './Account';

export type AppState = {
  accountStore: AccountState,
};

const reducer: Reducer = combineReducers<AppState>({
  accountStore: AccountReducer,
});

const enhancer = compose(
    persistState(

    ),
  )

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  enhancer,
  composeEnhancers
);

export default store;