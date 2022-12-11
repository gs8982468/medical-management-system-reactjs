import logo from './logo.svg';
import './App.css';
import FetchUserDetails from './component/customerComponent/FetchUserDetails';
import HeaderComponent from './component/customerComponent/HeaderComponent';
import FooterComponent from './component/customerComponent/FooterComponent';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={FetchUserDetails}></Route>
              <Route path="/fetchUserDetails" component={FetchUserDetails}></Route>
              <FetchUserDetails />
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router >
    </div>

  );
}

export default App;
