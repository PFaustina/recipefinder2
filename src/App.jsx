import Form from "./components/Form";
import RecipeDisplay from "./components/RecipeDisplay";
import { useState, useEffect } from "react";

function App() {
  
  const App = () => {
    
    const APIKEY = "16d8920fcba909a361e77352243451bd";

  

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
      const data = response.json();

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

export default App;

//comment for commit and push test