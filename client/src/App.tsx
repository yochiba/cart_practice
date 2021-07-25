import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { AppState } from './stores/index';
import { AccountState } from './stores/Account';
import { CartState } from './stores/Cart';
import { PurchaseHistoryState } from './stores/PurchaseHistory';
import { useSelector } from "react-redux";
import Navigation from './components/Navigation';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import Purchase from './components/Purchase';
import PurchaseConfirmation from './components/PurchaseConfirmation';
import Complete from './components/Complete';
import Cart from './components/Cart';
import SignIn from './components/Account/SignIn';
import SignUp from './components/Account/SignUp';

library.add(faShoppingCart);

const App: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);
  const cartStore: CartState = useSelector<AppState, CartState>(state => state.cartStore);
  const purchaseHistoryStore: PurchaseHistoryState = useSelector<AppState, PurchaseHistoryState>(state => state.purchaseHistoryStore);

  const checkAccountSignIn = () => {
    return accountStore.accessToken !== '' && accountStore.uid !== '' && accountStore.client !== '';
  }

  // const hasPurchaseSessions = () => {
  //   return purchaseHistoryStore;
  // }

  return (
    <div className='App'>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/product/:productId' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />
          {/* セッション持たせないとダメっぽい ここから */}
          <Route
            exact path='/purchase'
            render={() => {
              if (cartStore.cart.length === 0) {
                return <Redirect to='/' />
              } else if (!checkAccountSignIn()) {
                return <Redirect to='/sign-in' />
              } else {
                return <Purchase />
              }
            }}
          />
          {/* <Route 
            exact path='/purchase/confirmation'
            render={ () => hasPurchaseSessions() ? <Redirect to='/purchase' /> : <PurchaseConfirmation /> }
          /> */}
          <Route exact path='/purchase/confirmation' component={PurchaseConfirmation} />
          <Route exact path='/complete' component={Complete} />
          {/* セッション持たせないとダメっぽい ここまで */}
          <Route 
            exact path='/sign-in'
            render={ () => checkAccountSignIn() ? <Redirect to='/' /> : <SignIn /> }
          />
          <Route
            exact path='/sign-up'
            render={ () => checkAccountSignIn() ? <Redirect to='/' /> : <SignUp /> }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
