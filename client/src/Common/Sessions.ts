namespace Sessions {
  // Purchase sessions
  export type purchaseSessions = {
    sessionToken: string;
    accessToken: string;
    prePurchase: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  const initialDate: Date = new Date('1900/01/01 00:00:00')
  export const initialPurchaseSessions = {
    sessionToken: '',
    accessToken: '',
    prePurchase: true,
    createdAt: initialDate,
    updatedAt: initialDate,
  }
}

export default Sessions;