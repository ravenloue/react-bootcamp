import './App.css';
import Header from './Components/header';
import Course from './Components/Course';

const mostPopular = "JavaScript";

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Courses offered by Skillsoft</h2>
      <p></p>
      <Course popCourse={mostPopular}/>
    </div>
  );
}

export default App;
