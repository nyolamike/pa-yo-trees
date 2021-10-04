import logo from './logo.svg';
import './App.css';
import Tree from './lib/Tree';

function App() {

  //creating an objbect from a class
  var mikesTrees = new Tree("mTree1",0.0011334,45.7688,"UG","Nalumunye, Jomayi Estates, Wakiso");
  console.log("mikesTrees: ", mikesTrees);
  return (
    <div className="App">
      <h1> <img src={logo}  /> Pa Yo Trees</h1>
      <p>
        Your trees, your climate, our environment, our future
      </p>
    </div>
  );
}

export default App;
