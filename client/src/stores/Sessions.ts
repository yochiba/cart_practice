import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import Sessions from '../Common/Sessions';

// Action
const actionCreator = actionCreatorFactory();

// Sessions Action
export const SessionsActions = {
  updatePurchaseSessions: actionCreator<Sessions.purchaseSessions>('ACTIONS_UPDATE_CART_SESSIONS'),
}

// Sessions Reducer interface
export interface SessionsState {
  purchaseSessions: Sessions.purchaseSessions;
}

// Sessions Reducer initial state
const initialSessionsState: SessionsState = {
  purchaseSessions: Sessions.initialPurchaseSessions,
}

// Cart Reducer
export const CartReducer = reducerWithInitialState(initialSessionsState)
  .case(SessionsActions.updatePurchaseSessions, (state, purchaseSessions) => {
    return Object.assign({}, state, { purchaseSessions });
  })
