import Form from "./components/Form";
import RecipeDisplay from "./components/RecipeDisplay";
import { useState, useEffect } from "react";

function App() {
  
  const App = () => {
    const APP_ID = "fdf3085b";
    const APIKEY = "16d8920fcba909a361e77352243451bd";


  const [recipe, setRecipe] = useState(null); // state to hold movie data

  return (
    <>
     {/* Passing the function to Form as a prop and calling it movieSearch */}
     <Form recipeSearch={getRecipe} /> 
      <RecipeDisplay recipe={recipe} />
    </>
  )
}

export default App

//comment for commit and push test