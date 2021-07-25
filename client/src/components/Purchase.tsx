import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../stores/index';
import { useSelector, useDispatch } from "react-redux";
import { AccountState } from '../stores/Account';
import { PurchaseSessionState, purchaseSessionActions } from '../stores/PurchaseSession';
import { PurchaseHistoryState, purchaseHistoryActions } from '../stores/PurchaseHistory';
import { DeliveryState, deliveryActions } from '../stores/Delivery';
import Util from '../Common/Util';

const Purchase: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);
  const purchaseSessionStore: PurchaseSessionState = useSelector<AppState, PurchaseSessionState>(state => state.purchaseSessionStore);
  const purchaseHistoryStore: PurchaseHistoryState = useSelector<AppState, PurchaseHistoryState>(state => state.purchaseHistoryStore);
  const deliveryStore: DeliveryState = useSelector<AppState, DeliveryState>(state => state.deliveryStore);
  const dispatch = useDispatch();

  // State管理
  const [purchaseHistory, setPurchaseHistory] = useState<Util.PurchaseHistory>(Util.initialPurchaseHistory);
  const [delivery, setDelivery] = useState<Util.Delivery>(Util.initialDelivery);

  useEffect(() => {
    dispatch(purchaseSessionActions.updateAccessToken('test'));

    let expiredTime: Date = new Date();
    expiredTime.setHours(expiredTime.getHours() + 1);
    dispatch(purchaseSessionActions.updateExpiredAt(expiredTime));
  }, []);

  const onChangeInput = (e: any) => {
    const name: string = e.target.name;

    switch (name) {
      case 'payment_type':
        setPurchaseHistory({...purchaseHistory, payment_type: composeValue<number>(e.target.value)});
        dispatch(purchaseHistoryActions.updatePaymentType(composeValue<number>(e.target.value)));
        break;
      case 'payment_status':
        setPurchaseHistory({...purchaseHistory, payment_status: composeValue<number>(e.target.value)});
        dispatch(purchaseHistoryActions.updatePaymentStatus(composeValue<number>(e.target.value)));
        break;
      case 'delivery_type':
        setPurchaseHistory({...purchaseHistory, delivery_type: composeValue<number>(e.target.value)});
        dispatch(purchaseHistoryActions.updateDeliveryType(composeValue<number>(e.target.value)));
        break;
      case 'delivery_status':
        setPurchaseHistory({...purchaseHistory, delivery_status: composeValue<number>(e.target.value)});
        dispatch(purchaseHistoryActions.updateDeliveryType(composeValue<number>(e.target.value)));
        break;
      case 'message':
        setPurchaseHistory({...purchaseHistory, message: composeValue<string>(e.target.value)});
        dispatch(purchaseHistoryActions.updateMessage(composeValue<string>(e.target.value)));
        break;
      case 'firstname':
        setDelivery({...delivery, firstname: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updateFirstname(composeValue<string>(e.target.value)));
        break;
      case 'lastname':
        setDelivery({...delivery, lastname: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updateLastname(composeValue<string>(e.target.value)));
        break;
      case 'email':
        setDelivery({...delivery, email: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updateEmail(composeValue<string>(e.target.value)));
        break;
      case 'phone':
        setDelivery({...delivery, phone: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updatePhone(composeValue<string>(e.target.value)));
        break;
      case 'zip':
        setDelivery({...delivery, zip: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updateZip(composeValue<string>(e.target.value)));
        break;
      case 'address_one':
        setDelivery({...delivery, address_one: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updateAddressOne(composeValue<string>(e.target.value)));
        break;
      case 'address_two':
        setDelivery({...delivery, address_two: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updateAddressTwo(composeValue<string>(e.target.value)));
        break;
      case 'address_three':
        setDelivery({...delivery, address_three: composeValue<string>(e.target.value)});
        dispatch(deliveryActions.updateAddressThree(composeValue<string>(e.target.value)));
        break;
      default:
        break;
    }
  }

  const composeValue = function<T>(value: T): T {
    return value;
  }

  const purchaseForm = (formType: string) => {
    switch (formType) {
      case 'purchase-history':
        return (
          Util.PURCHASE_HISTORY_FORMAT.map((purchaseHistoryData: Util.InputFormat) => {
            switch (purchaseHistoryData.name) {
              case 'message':
                return inputTextArea(formType, purchaseHistoryData.name, purchaseHistoryData.displayName);
              case 'total_price':
                return inputText(formType, purchaseHistoryData);
              case 'payment_type':
              case 'delivery_type':
                return inputCheckBox(formType, purchaseHistoryData.name);
              default:
                return null;
            }
          })
        );
      case 'delivery':
        return (
          Util.DELIVERY_FORMAT.map((deliveryData: Util.InputFormat) => {
            return inputText(formType, deliveryData);
          })
        );
      default:
        return null;
    }
  }

  const inputTextArea = (formType: string, name: string, displayName: string) => {
    return (
      <div className={name}>
        <label
          htmlFor={`${formType}-${name}`}
          key={`${formType}-label-${name}`}
        >
          {displayName}
        </label>
        <textarea
          id={`${formType}-${name}`}
          name={name}
          onChange={(e) => {onChangeInput(e)}}
        >
        </textarea>
      </div>
    );
  }

  const inputText = (formType: string, data: Util.InputFormat) => {
    return (
      <div className={data.name}>
        <label
          htmlFor={`${formType}-${data.name}`}
          key={`${formType}-label-${data.name}`}
        >
          {data.displayName}
        </label>
        <input
          type={data.type}
          id={`${formType}-${data.name}`}
          name={data.name}
          onChange={(e) => {onChangeInput(e)}}
          key={`${formType}-input-${data.name}`}
        />
      </div>
    );
  }

  const inputCheckBox = (formType: string, name: string) => {
    let checkBoxTitle: string = '';
    let checkBoxOptions: Util.typeOption[] = [];
    let checkedValue: number = 0;
    switch (name) {
      case 'payment_type':
        checkBoxTitle = 'お支払い方法';
        checkBoxOptions = Util.paymentTypeOptions;
        checkedValue = Number(purchaseHistory.payment_type);
        break;
      case 'delivery_type':
        checkBoxTitle = '配達方法';
        checkBoxOptions = Util.deliveryTypeOptions;
        checkedValue = Number(purchaseHistory.delivery_type);
        break;
      default:
        break;
    }

    return (
      <div className={name}>
        <h2>{checkBoxTitle}</h2>
        {
          checkBoxOptions.map((checkBoxOption: Util.typeOption) => {
            const checked: boolean = checkBoxOption.value === checkedValue;
            return(
              <>
                <input
                  type='radio'
                  id={`${formType}-${checkBoxOption.name}`}
                  name={name}
                  value={checkBoxOption.value}
                  checked={checked}
                  onChange={(e) => {onChangeInput(e)}}
                  key={`${formType}-input-${checkBoxOption.name}`}
                />
                <label
                  htmlFor={`${formType}-${checkBoxOption.name}`}
                  key={`${formType}-label-${checkBoxOption.name}`}
                >
                  {checkBoxOption.name}
                </label>
              </>
            );
          })
        }
      </div>
    );
  }

  return (
    <section className='Purchase'>
      <section className='purchase-history-form'>
        <h2>購入情報入力</h2>
        {purchaseForm('purchase-history')}
      </section>
      <section className='delivery-form'>
        <h2>お届け先情報</h2>
        {purchaseForm('delivery')}
      </section>
      <Link to='/purchase/confirmation'>
        最終確認へ進む
      </Link>
    </section>
  );
}

export default Purchase;