import React from 'react';
import { AppState } from '../stores/index';
import { useSelector, useDispatch } from "react-redux";
import { PurchaseHistoryState } from '../stores/PurchaseHistory';
import { DeliveryState } from '../stores/Delivery';

const PurchaseConfirmation: React.FC = () => {
  // Redux
  const purchaseHistoryStore: PurchaseHistoryState = useSelector<AppState, PurchaseHistoryState>(state => state.purchaseHistoryStore);
  const deliveryStore: DeliveryState = useSelector<AppState, DeliveryState>(state => state.deliveryStore);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {

  }

  return (
    <div className='PurchaseConfirm'>
      <h1>注文内容確認</h1>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <h2>お届け先</h2>
        <input type='hidden' name='payment_type' value={purchaseHistoryStore.payment_type} />
        <input type='hidden' name='payment_status' value='0' />
        <input type='hidden' name='delivery_type' value={purchaseHistoryStore.delivery_type} />
        <input type='hidden' name='delivery_status' value='0' />
        <input type='hidden' name='message' value={purchaseHistoryStore.message} />

        <input type='hidden' name='firstname' value={deliveryStore.firstname} />
        <input type='hidden' name='lastname' value={deliveryStore.lastname} />
        <input type='hidden' name='email' value={deliveryStore.email} />
        <input type='hidden' name='phone' value={deliveryStore.phone} />
        <input type='hidden' name='zip' value={deliveryStore.zip} />
        <input type='hidden' name='address_one' value={deliveryStore.address_one} />
        <input type='hidden' name='address_two' value={deliveryStore.address_two} />
        <input type='hidden' name='address_three' value={deliveryStore.address_three} />
      </form>
    </div>
  );
}

export default PurchaseConfirmation;