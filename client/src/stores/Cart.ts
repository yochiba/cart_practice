import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import Util from '../Common/Util';

// Action
const actionCreator = actionCreatorFactory();

// Cart Action
export const cartActions = {
  updateCart: actionCreator<Util.CartProduct[]>('ACTIONS_UPDATE_CART'),
}

// Cart Reducer interface
export interface CartState {
  cart: Util.CartProduct[];
}

// Cart Reducer initial state
const initialCartState: CartState = {
  cart: [],
}

// Cart Reducer
export const cartReducer = reducerWithInitialState(initialCartState)
  .case(cartActions.updateCart, (state, cart) => {
    return Object.assign({}, state, { cart });
  })
