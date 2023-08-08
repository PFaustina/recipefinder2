import Form from "./components/Form";
import RecipeDisplay from "./components/RecipeDisplay";
import { useState, useEffect } from "react";

function App() {
  
  const apiKey = ""; // variable with your apiKey
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