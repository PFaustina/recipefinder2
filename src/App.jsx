import { useState, useEffect } from "react";
import RecipeDisplay from "./RecipeDisplay";


function App() {
    
    const APP_ID = "fdf3085b";
    const APIKEY = "16d8920fcba909a361e77352243451bd";

 // state to hold recipe data
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      getRecipes();
    }, []);


    const [search, setSearch] = useState("");

    //Stores current search submit
  //creating useState for submit so it would only request after hitting submit/search button
  const [submit, setSubmit] = useState("");


    // Function to get recipes from the API

    // "promise" request to my api of fetching the data in the background
    const getRecipes = async () => {
      
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APIKEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
      const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
      setSearch(e.target.value);
    };


    const getSearch = e => {
      e.preventDefault();
      setSubmit(search);
      setSearch("");


  return (
<div className="App">

   <form onSubmit={getSearch} className="search-form">
    <input className="search-bar" type="text"value={search}onChange={updateSearch}/>
    <button className="search-button" type="submit">
      Search
      </button>
   </form>
   
    {recipes.map(recipe =>(
      <RecipeDisplay 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />

    ))}

</div>

  );
}

export default App;