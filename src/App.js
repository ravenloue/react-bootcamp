import { BrowserRouter, Route } from 'react-router-dom';
//
import './styles.css';
import Home from './Components/home/home';
import Customers from './Components/customers/customers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/customers" component={ Customers } />
      </BrowserRouter>
    </div>
  );
}

export default App;
