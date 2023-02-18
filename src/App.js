import { BrowserRouter, Route } from 'react-router-dom';
//
import './styles.css';
import Header from './Components/header';
import Container from './Components/container';
import Footer from './Components/footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ Header } />
      </BrowserRouter>
    </div>
  );
}

export default App;
