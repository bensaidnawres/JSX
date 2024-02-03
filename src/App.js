import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroupExample from './Card';
function App() {

var firstname=''

  return (
    <div className="App">
      {firstname? 'hello':'hello there'}
  <ListGroupExample/>
    </div>
  );
}

export default App;
