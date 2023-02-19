import { BrowserRouter, Route } from 'react-router-dom';
//
import './styles.css';
import Home from './Components/home/home';
import Customers from './Components/customers/customers';
import Register from './Components/register/register';
import Login from './Components/login/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/customers" component={ Customers } />
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
      </BrowserRouter>
    </div>
  );
}

export default App;
