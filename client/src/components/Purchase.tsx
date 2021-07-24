import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../stores/index';
import { useSelector } from "react-redux";
import { AccountState } from '../stores/Account';
import { PurchaseSessionsState } from '../stores/PurchaseSessions';
import Util from '../Common/Util';


const Purchase: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);
  const purchaseSessionsStore: PurchaseSessionsState = useSelector<AppState, PurchaseSessionsState>(state => state.purchaseSessionsStore);

  // State管理
  const [purchaseHistory, setPurchaseHistory] = useState<Util.PurchaseHistory>(Util.initialPurchaseHistory);
  const [delivery, setDelivery] = useState<Util.Delivery>(Util.initialDelivery);

  useEffect(() => {
    const purchaseSessions: Util.Delivery = purchaseSessionsStore.deliverySessions;
    if (purchaseSessions === Util.initialDelivery) {
      // setDelivery(accountStore);
    }
  })


  const onChangeInput = (e: any) => {
    const name: string = e.target.name;
    
    switch (name) {
      case 'payment_type':
        setPurchaseHistory({...purchaseHistory, payment_type: composeValue<number>(e.target.value)});
        break;
      case 'payment_status':
        setPurchaseHistory({...purchaseHistory, payment_status: composeValue<number>(e.target.value)});
        break;
      case 'shipping_type':
        setPurchaseHistory({...purchaseHistory, shipping_type: composeValue<number>(e.target.value)});
        break;
      case 'shipping_status':
        setPurchaseHistory({...purchaseHistory, shipping_status: composeValue<number>(e.target.value)});
        break;
      case 'message':
        setPurchaseHistory({...purchaseHistory, message: composeValue<string>(e.target.value)});
        break;
      case 'firstname':
        setDelivery({...delivery, firstname: composeValue<string>(e.target.value)});
        break;
      case 'lastname':
        setDelivery({...delivery, lastname: composeValue<string>(e.target.value)});
        break;
      case 'email':
        setDelivery({...delivery, email: composeValue<string>(e.target.value)});
        break;
      case 'phone':
        setDelivery({...delivery, phone: composeValue<string>(e.target.value)});
        break;
      case 'zip':
        setDelivery({...delivery, zip: composeValue<string>(e.target.value)});
        break;
      case 'address_one':
        setDelivery({...delivery, address_one: composeValue<string>(e.target.value)});
        break;
      case 'address_two':
        setDelivery({...delivery, address_two: composeValue<string>(e.target.value)});
        break;
      case 'address_three':
        setDelivery({...delivery, address_three: composeValue<string>(e.target.value)});
        break;
      default:
        break;
    }
  }

  const composeValue = function<T>(value: T ): T {
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
              default:
                return inputCheckBox(formType, purchaseHistoryData.name);
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
    let checkBoxOptions: Util.typeOption[] = [];
    switch (name) {
      case 'payment_type':
        checkBoxOptions = Util.paymentTypeOptions;
        break;
      case 'delivery_type':
        checkBoxOptions = Util.deliveryTypeOptions;
        break;
      default:
        break;
    }

    return (
      <div className={name}>
        {
          checkBoxOptions.map((checkBoxOption: Util.typeOption) => {
            return(
              <>
                <label
                  htmlFor={`${formType}-${checkBoxOption.name}`}
                  key={`${formType}-label-${checkBoxOption.name}`}
                >
                  {checkBoxOption.name}
                </label>
                <input
                  type='radio'
                  id={`${formType}-${checkBoxOption.name}`}
                  name={name}
                  value={checkBoxOption.value}
                  onChange={(e) => {onChangeInput(e)}}
                  key={`${formType}-input-${checkBoxOption.name}`}
                />
              </>
            );
          })
        }
      </div>
    );
  }

  // 
  const handlePurchaseSessions = () => {

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
      <Link
        to='/purchase/confirmation'
        onClick={() => {handlePurchaseSessions()}}
      >
        最終確認へ進む
      </Link>
    </section>
  );
}

export default Purchase;