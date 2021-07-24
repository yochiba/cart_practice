namespace PurchaseSessions {
  // PurchaseHistory sessions
  export type PurchaseHistorySessions = {
    payment_type: number;
    payment_status: number;
    delivery_type: number;
    delivery_status: number;
    message: string;
  }

  export const initialPurchaseHistorySessions = {
    payment_type: 0,
    payment_status: 0,
    delivery_type: 0,
    delivery_status: 0,
    message: '',
  }

  // Delivery sessions
  export type DeliverySessions = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    zip: string;
    address_one: string;
    address_two: string;
    address_three: string;
  }

  export const initialDeliverySessions = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    zip: '',
    address_one: '',
    address_two: '',
    address_three: '',
  }
}

export default PurchaseSessions;