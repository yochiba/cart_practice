import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
// Action
const actionCreator = actionCreatorFactory();

// PurchaseSession State
export type PurchaseSessionState = {
  accessToken: string;
  expiredAt: Date;
}

// PurchaseSession initial
let expiredTime: Date = new Date();
expiredTime.setHours(expiredTime.getHours() + 1);
export const initialPurchaseSession: PurchaseSessionState = {
  accessToken: '',
  expiredAt: expiredTime,
}

// PurchaseSession Action
export const purchaseSessionActions = {
  updateAccessToken: actionCreator<string>('ACTIONS_UPDATE_TOKEN'),
  updateExpiredAt: actionCreator<Date>('ACTIONS_UPDATE_EXPIRED_AT'),
}

// PurchaseSessions Reducer
export const purchaseSessionReducer = reducerWithInitialState(initialPurchaseSession)
  .case(purchaseSessionActions.updateAccessToken, (state, accessToken) => {
    return Object.assign({}, state, { accessToken });
  })
  .case(purchaseSessionActions.updateExpiredAt, (state, expiredAt) => {
    return Object.assign({}, state, { expiredAt });
  })
