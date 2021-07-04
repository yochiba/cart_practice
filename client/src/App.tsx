import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Navigation from './component/Navigation';
import ProductList from './component/Product/ProductList';
import ProductDetail from './component/Product/ProductDetail';
import Register from './component/Register';
import RegisterConfirm from './component/RegisterConfirm';
import Complete from './component/Complete';
import Cart from './component/Cart';
import SignIn from './component/Account/SignIn';
import SignUp from './component/Account/SignUp';

library.add(faShoppingCart);

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/product/:productId' component={ProductDetail} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/register/confirm' component={RegisterConfirm} />
          <Route exact path='/complete' component={Complete} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
