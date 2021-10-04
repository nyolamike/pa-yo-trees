import logo from './logo.svg';
import './App.css';
import Plant from './lib/Plant'
import Tree from './lib/Tree'

function App() {

  //creating an objbect from a class
  var mikesPlant = new Plant("mPlnt1",0.0011334,45.7688,"UG","Nalumunye, Jomayi Estates, Wakiso")
  mikesPlant.log()
  //a tree
  var mikesTree = new Tree("mPlnt2",0.1011334,47.7688,"UG","Nalumunye, Jomayi Estates, Wakiso")
  mikesTree.log()
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
