import './App.css';
import logo from './cakes.jpeg'; // Tell webpack this JS file uses this image
import {useState} from 'react'

function App() {
const [items, setItems] = useState([
  {id:1, name: "Make buttermilk first"},
  {id:2, name: "Weigh out dry ingredients"},
  {id:3, name: "Preheat oven to 180 degrees C"},
  {id:4, name: "Add oil to wet ingredients"},
  {id:5, name: "Mix wet and dry ingredients together"}
]);
const [newItem, setNewItem] = useState()

const doneItem = (itemId) => {
  //we want to remove the done items so use filter
  const newItems = items.filter((item) => item.id !== itemId) //if this is true then keep the item
  setItems(newItems) //reset the state to the new list items
}

const listItems = items.map((item) => {
  return (
  <li key= {item.id}>{item.name}   

    <button onClick={() => doneItem(item.id)}>  Done  </button>
    </li>     
    )
});

const handleItemInput = (event) => {
  setNewItem(event.target.value)
}

const saveNewItem = (event) => {
  event.preventDefault() //stops the submit button from resfreshing the page
  const newItemObject = {id: Date.now(), name:newItem}
  const nextItems = [...items, newItemObject]  ///[... ] this is a spread operator
  setItems(nextItems)
  setNewItem("") //resets the input new item box
}


  return (
    <div className="App">
 
    {/* Hint for hw: <h1 className = {conditional ? "this class if true": "or this classif false"} >Shopping List */}
      <h1>My Baking To Do List - {items.length ? "Keep on baking": "Enjoy!"}</h1> 
      {/* if this statement items.length is true (ie there are still items on your list) then print "keep shopping" - term is called a ternary (three) */}
      
      <hr></hr>
      <container>
      <div>
        <h2> Ingredients needed: </h2>
        
        <ul>
          <li>400ml - soya milk</li>
          <li>1 tablespoon - lemon juice</li>
          <li>1/4 cup - corn oil</li>
          <li>200g - self raising flour</li>
          <li>1 teaspoon - bicarbonate of soda</li>
          <li>150g - caster sugar </li>
        </ul>

        <form onSubmit={saveNewItem}>
          <label htmlFor = 'new-item'> Add a new instruction: </label>
          <input id='new-item' type = 'text' value = {newItem} onChange={handleItemInput}/>
          <input type='submit' value='Save new instruction'/>
      </form>
      </div>

      <img src={logo} alt="Cakes background"/>
      </container>
      
      <ul>
      {listItems}
      </ul>
      <hr></hr>
    </div>

  );
  }

export default App;