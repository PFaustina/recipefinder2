import { useState, useEffect } from "react";
import RecipeDisplay from "./RecipeDisplay";



function App() {
    
    const APP_ID = "fdf3085b";
    const APIKEY = "16d8920fcba909a361e77352243451bd";

 // useState to hold recipe data
    const [recipes, setRecipes] = useState([]);


    // useState to hold search data
    const [search, setSearch] = useState("");

    //Stores current search submit
  //creating useState for submit so it would only request after hitting submit/search button
  const [submit, setSubmit] = useState("");


    useEffect(() => {// useEffect hook to trigger fetching recipes when submit changes
      getRecipes();
    }, [submit]);


    // Function to get recipes from the API

    // fetching data from Edamam API
    const getRecipes = async () => {
      
      const response = await fetch(`https://api.edamam.com/search?q=${submit}&app_id=${APP_ID}&app_key=${APIKEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
      const data = await response.json();
        setRecipes(data.hits);
        
    };

    //Function for updating the search state
    const updateSearch = e => {
      setSearch(e.target.value);
    };
    

    const getSearch = e => {
      e.preventDefault(); // prevents the default behavior of refreshing the page
      setSubmit(search); // Triggers the useEffect to fetch recipes
      setSearch(""); // Clearing the search input after submission
    }

  return (
<div className="App">

   <form onSubmit={getSearch} className="search-form">
    <input className="search-bar" type="text"value={search}onChange={updateSearch}/>
    <button className="search-button" type="submit">
      Recipe Search
      </button>
   </form>

   {/* mapping throuh the list of items */}
   <div className="recipes">
    {recipes.map(recipe =>(
      <RecipeDisplay 
      key={recipe.recipe.key}
      title={recipe.recipe.label} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />

    ))}
</div>
</div>

  );
}
export default App;