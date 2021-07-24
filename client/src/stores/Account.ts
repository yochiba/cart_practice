import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

// Action
const actionCreator = actionCreatorFactory();

// Account Action
export const accountActions = {
  updateId: actionCreator<number>('ACTIONS_UPDATE_ID'),
  updateAccessToken: actionCreator<string>('ACTIONS_UPDATE_ACCESS_TOKEN'),
  updateProvider: actionCreator<string>('ACTIONS_UPDATE_PROVIDER'),
  updateClient: actionCreator<string>('ACTIONS_CLIENT'),
  updateUid: actionCreator<string>('ACTIONS_UPDATE_UID'),
  updateFirstname: actionCreator<string>('ACTIONS_FIRSTNAME'),
  updateLastname: actionCreator<string>('ACTIONS_LASTNAME'),
}

// Account Reducer interface
export interface AccountState {
  id: number;
  accessToken: string;
  provider: string;
  client: string;
  uid: string;
  firstname: string;
  lastname: string;
}

// Account Reducer initial state
const initialAccountState: AccountState = {
  id: 0,
  accessToken: '',
  provider: '',
  client: '',
  uid: '',
  firstname: '',
  lastname: '',
}

// Account Reducer
export const AccountReducer = reducerWithInitialState(initialAccountState)
  .case(accountActions.updateId, (state, id) => {
    return Object.assign({}, state, { id });
  })
  .case(accountActions.updateAccessToken, (state, accessToken) => {
    return Object.assign({}, state, { accessToken });
  })
  .case(accountActions.updateProvider, (state, provider) => {
    return Object.assign({}, state, { provider });
  })
  .case(accountActions.updateClient, (state, client) => {
    return Object.assign({}, state, { client });
  })
  .case(accountActions.updateUid, (state, uid) => {
    return Object.assign({}, state, { uid });
  })
  .case(accountActions.updateFirstname, (state, firstname) => {
    return Object.assign({}, state, { firstname });
  })
  .case(accountActions.updateLastname, (state, lastname) => {
    return Object.assign({}, state, { lastname });
  })
