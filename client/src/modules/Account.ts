import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

// Action
const actionCreator = actionCreatorFactory();

// Account Action
export const accountActions = {
  updateAccessToken: actionCreator<string>('ACTIONS_UPDATE_ACCESS_TOKEN'),
  updateProvider: actionCreator<string>('ACTIONS_UPDATE_PROVIDER'),
  updateUid: actionCreator<string>('ACTIONS_UPDATE_UID'),
}

// Account Reducer interface
export interface AccountState {
  accessToken: string;
  provider: string;
  uid: string;
}

// Account Reducer initial state
const initialAccountState: AccountState = {
  accessToken: '',
  provider: '',
  uid: '',
}

// Account Reducer
export const AccountReducer = reducerWithInitialState(initialAccountState)
  .case(accountActions.updateAccessToken, (state, accessToken) => {
    return Object.assign({}, state, { accessToken });
  })
  .case(accountActions.updateProvider, (state, provider) => {
    return Object.assign({}, state, { provider });
  })
  .case(accountActions.updateUid, (state, uid) => {
    return Object.assign({}, state, { uid });
  })
