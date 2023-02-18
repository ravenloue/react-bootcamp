import { BrowserRouter, Route } from 'react-router-dom';
//
import './styles.css';
import Home from './Components/home/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
      </BrowserRouter>
    </div>
  );
}

export default App;
