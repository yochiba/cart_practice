import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import Sessions from '../Common/Sessions';

// Action
const actionCreator = actionCreatorFactory();

// Sessions Action
export const SessionsActions = {
  updateRegisteredSessions: actionCreator<Sessions.registeredSessions>('ACTIONS_UPDATE_CART_SESSIONS'),
}

// Sessions Reducer interface
export interface SessionsState {
  registeredSessions: Sessions.registeredSessions;
}

// Sessions Reducer initial state
const initialSessionsState: SessionsState = {
  registeredSessions: Sessions.initialRegisteredSessions,
}

// Cart Reducer
export const CartReducer = reducerWithInitialState(initialSessionsState)
  .case(SessionsActions.updateRegisteredSessions, (state, registeredSessions) => {
    return Object.assign({}, state, { registeredSessions });
  })
