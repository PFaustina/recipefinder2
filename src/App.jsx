import Form from "./components/Form";
import RecipeDisplay from "./components/RecipeDisplay";
import { useState, useEffect } from "react";

function App() {
  
  const App = () => {
    
    const APIKEY = "16d8920fcba909a361e77352243451bd";


  const [recipe, setRecipe] = useState(null); // state to hold movie data

  return (
<div className="App">

   <form className="search-form">
    <input className="search-bar" type="text"/>
    <button className="search-button" type="submit">
      Search
      </button>
   </form>


</div>
  )
}

export default App

//comment for commit and push test