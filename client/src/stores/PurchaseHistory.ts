import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
// Action
const actionCreator = actionCreatorFactory();

// PurchaseHistory
export type PurchaseHistoryState = {
  // session_token: string;
  payment_type: number;
  payment_status: number;
  delivery_type: number;
  delivery_status: number;
  message: string;
}

export const initialPurchaseHistory: PurchaseHistoryState = {
  // session_token: '',
  payment_type: 0,
  payment_status: 0,
  delivery_type: 0,
  delivery_status: 0,
  message: '',
}

// PurchaseHistory Action
export const purchaseHistoryActions = {
  // updateSessionToken: actionCreator<string>('ACTIONS_UPDATE_SESSION_TOKEN'),
  updatePaymentType: actionCreator<number>('ACTIONS_UPDATE_PAYMENT_TYPE'),
  updatePaymentStatus: actionCreator<number>('ACTIONS_UPDATE_PAYMENT_STATUS'),
  updateDeliveryType: actionCreator<number>('ACTIONS_UPDATE_DELIVERY_TYPE'),
  updateDeliveryStatus: actionCreator<number>('ACTIONS_UPDATE_DELIVERY_STATUS'),
  updateMessage: actionCreator<string>('ACTIONS_UPDATE_MESSAGE'),
}

// PurchaseHistory Reducer
export const purchaseHistoryReducer = reducerWithInitialState(initialPurchaseHistory)
  // .case(purchaseHistoryActions.updateSessionToken, (state, sessionToken) => {
  //   return Object.assign({}, state, { sessionToken });
  // })
  .case(purchaseHistoryActions.updatePaymentType, (state, paymentType) => {
    return Object.assign({}, state, { paymentType });
  })
  .case(purchaseHistoryActions.updatePaymentStatus, (state, paymentStatus) => {
    return Object.assign({}, state, { paymentStatus });
  })
  .case(purchaseHistoryActions.updateDeliveryType, (state, deliveryType) => {
    return Object.assign({}, state, { deliveryType });
  })
  .case(purchaseHistoryActions.updateDeliveryStatus, (state, deliveryStatus) => {
    return Object.assign({}, state, { deliveryStatus });
  })
  .case(purchaseHistoryActions.updateMessage, (state, message) => {
    return Object.assign({}, state, { message });
  })
