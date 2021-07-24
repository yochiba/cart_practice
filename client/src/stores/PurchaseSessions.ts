import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import Sessions from '../Common/PurchaseSessions';

// Action
const actionCreator = actionCreatorFactory();

// Sessions Action
export const PurchaseSessionsActions = {
  updatePurchaseHistorySessions: actionCreator<Sessions.PurchaseHistorySessions>('ACTIONS_UPDATE_PURCHASE_HISTORY_SESSIONS'),
  updateDeliverySessions: actionCreator<Sessions.DeliverySessions>('ACTIONS_UPDATE_DELIVERY_SESSIONS'),
}

// PurchaseSessions Reducer interface
export interface PurchaseSessionsState {
  purchaseHistorySessions: Sessions.PurchaseHistorySessions;
  deliverySessions: Sessions.DeliverySessions;
}

// PurchaseSessions Reducer initial state
const initialPurchaseSessionsState: PurchaseSessionsState = {
  purchaseHistorySessions: Sessions.initialPurchaseHistorySessions,
  deliverySessions: Sessions.initialDeliverySessions,
}

// PurchaseSessions Reducer
export const PurchaseSessionsReducer = reducerWithInitialState(initialPurchaseSessionsState)
  .case(PurchaseSessionsActions.updatePurchaseHistorySessions, (state, purchaseHistorySessions) => {
    return Object.assign({}, state, { purchaseHistorySessions });
  })
  .case(PurchaseSessionsActions.updateDeliverySessions, (state, deliverySessions) => {
    return Object.assign({}, state, { deliverySessions });
  })
