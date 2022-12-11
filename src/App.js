import logo from './logo.svg';
import './App.css';
import FetchUserDetails from './component/customerComponent/FetchUserDetails';
import HeaderComponent from './component/customerComponent/HeaderComponent';
import FooterComponent from './component/customerComponent/FooterComponent';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './component/customerComponent/HomePage';
import RegisterCustomer from './component/customerComponent/RegisterCustomer';

function App() {
  return (
    <div className="App">
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/register-customer" component={RegisterCustomer}></Route>
              <Route path="/fetchUserDetails" component={FetchUserDetails}></Route>
              <FetchUserDetails />
            </Switch>
          </div>
          <FooterComponent />
      </Router >
    </div>

  );
}

export default App;
