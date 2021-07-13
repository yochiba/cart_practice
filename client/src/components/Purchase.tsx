import React, { useState } from 'react';
import { AppState } from '../stores/index';
import { useSelector } from "react-redux";
import { AccountState } from '../stores/Account';
import Util from '../Common/Util';

const Purchase: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);

  // State管理
  const [purchase, setPurchase] = useState<Util.Purchase>(Util.initialPurchase);
  // TODO purchaseが完了したらsessionsを作成する。

  const onChangePurchaseInput = (e: any) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    // FIXME 表示するinputをPurchaseに合わせる
    switch (name) {
      case 'firstname':
        setPurchase({...purchase, firstname: value})
        break;
      case 'lastname':
        setPurchase({...purchase, lastname: value})
        break;
      case 'email':
        setPurchase({...purchase, email: value})
        break;
      case 'phone':
        setPurchase({...purchase, phone: value})
        break;
      default:
        break;
    }
  }

  const purchaseInputs = () => {
    return (
      Util.PURCHASE_FORMAT.map((purchaseData: Util.InputFormat) => {
        return (
          <div className={purchaseData.name}>
            <label
              htmlFor={`purchase-${purchaseData.name}`}
              key={`purchase-label-${purchaseData.name}`}
            >
              {purchaseData.displayName}
            </label>
            <input
              type={purchaseData.type}
              id={`purchase-${purchaseData.name}`}
              name={purchaseData.name}
              onChange={(e) => {onChangePurchaseInput(e)}}
              key={`purchase-input-${purchaseData.name}`}
            />
          </div>
        );
      })
    );
  }

  return (
    <section className='Purchase'>
      <h1>商品確認＆ユーザー情報入力</h1>
      {/* 先にログイン機能を実装 */}
      {/* <form>
        <div class="preference">
          <label for="cheese">Do you like cheese?</label>
          <input type="checkbox" name="cheese" id="cheese">
        </div>
      </form> */}
    </section>
  );
}

export default Purchase;