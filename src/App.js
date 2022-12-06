import logo from './logo.svg';
import './App.css';
import FetchUserDetails from './component/customerComponent/FetchUserDetails';
import HeaderComponent from './component/customerComponent/HeaderComponent';
import FooterComponent from './component/customerComponent/FooterComponent';

function App() {
  return (
    <div className="App">
    {/* <div className="container"> */}
       <HeaderComponent />
      <FetchUserDetails />


      <FooterComponent />
    </div>
  );
}

export default App;
