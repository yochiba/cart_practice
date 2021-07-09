import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { AppState } from './stores/index';
import { AccountState } from './stores/Account';
import { CartState } from './stores/Cart';
import { useSelector } from "react-redux";
import Navigation from './components/Navigation';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import Register from './components/Register';
import RegisterConfirm from './components/RegisterConfirm';
import Complete from './components/Complete';
import Cart from './components/Cart';
import SignIn from './components/Account/SignIn';
import SignUp from './components/Account/SignUp';

library.add(faShoppingCart);

const App: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);
  const cartStore: CartState = useSelector<AppState, CartState>(state => state.cartStore);

  const accountSignIn = () => {
    if (accountStore.accessToken && accountStore.uid && accountStore.client) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className='App'>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/product/:productId' component={ProductDetail} />
          {/* セッション持たせないとダメっぽい ここから */}
          <Route
            exact path='/register'
            // render={ () => accountSignIn() && cartStore.cart.length !== 0 ? <Register /> : <SignIn /> }
            render={() => {
              if (cartStore.cart.length === 0) {
                return <ProductList />
              } else if (accountSignIn()) {
                return <SignIn />
              } else {
                return <Register />
              }
            }}
          />
          <Route exact path='/register/confirm' component={RegisterConfirm} />
          <Route exact path='/complete' component={Complete} />
          <Route exact path='/cart' component={Cart} />
          {/* セッション持たせないとダメっぽい ここまで */}
          <Route 
            exact path='/sign-in'
            render={ () => accountSignIn() ? <Redirect to='/' /> : <SignIn /> }
          />
          <Route
            exact path='/sign-up'
            render={ () => accountSignIn() ? <Redirect to='/' /> : <SignUp /> }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
