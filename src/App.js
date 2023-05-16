import './App.css';
import logo from './cakes.jpeg'; // Tell webpack this JS file uses this image

console.log(logo); //


function App() {
  return (
    <div className="App">

      <h1> My Baking To Do List </h1>
      <img src={logo} alt="Cakes background"/>;
    </div>

  );
}

export default App;