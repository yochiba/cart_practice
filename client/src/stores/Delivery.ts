import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
// Action
const actionCreator = actionCreatorFactory();

// // Delivery State
export type DeliveryState = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  zip: string;
  address_one: string;
  address_two: string;
  address_three: string;
}

export const initialDelivery: DeliveryState = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  zip: '',
  address_one: '',
  address_two: '',
  address_three: '',
}

// Delivery Action
export const deliveryActions = {
  updateFirstname: actionCreator<string>('ACTIONS_UPDATE_FIRSTNAME'),
  updateLastname: actionCreator<string>('ACTIONS_UPDATE_LASTNAME'),
  updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL'),
  updatePhone: actionCreator<string>('ACTIONS_UPDATE_PHONE'),
  updateZip: actionCreator<string>('ACTIONS_UPDATE_ZIP'),
  updateAddressOne: actionCreator<string>('ACTIONS_UPDATE_ADDRESS_ONE'),
  updateAddressTwo: actionCreator<string>('ACTIONS_UPDATE_ADDRESS_TWO'),
  updateAddressThree: actionCreator<string>('ACTIONS_UPDATE_ADDRESS_THREE'),
}

// Delivery Reducer
export const deliveryReducer = reducerWithInitialState(initialDelivery)
  .case(deliveryActions.updateFirstname, (state, firstname) => {
    return Object.assign({}, state, { firstname });
  })
  .case(deliveryActions.updateLastname, (state, lastname) => {
    return Object.assign({}, state, { lastname });
  })
  .case(deliveryActions.updateEmail, (state, email) => {
    return Object.assign({}, state, { email });
  })
  .case(deliveryActions.updatePhone, (state, phone) => {
    return Object.assign({}, state, { phone });
  })
  .case(deliveryActions.updateZip, (state, zip) => {
    return Object.assign({}, state, { zip });
  })
  .case(deliveryActions.updateAddressOne, (state, address_one) => {
    return Object.assign({}, state, { address_one });
  })
  .case(deliveryActions.updateAddressTwo, (state, address_two) => {
    return Object.assign({}, state, { address_two });
  })
  .case(deliveryActions.updateAddressThree, (state, address_three) => {
    return Object.assign({}, state, { address_three });
  })
