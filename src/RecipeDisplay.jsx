import React from 'react'

const RecipeDisplay = ({title, image,ingredients}) => {
  
  return (
    
    <div>
      
   <h1>{title}</h1>
     <div className="recipe-image">
     <img src={image} alt="" />
      </div>
      <ol>
       {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient.text}</li>
     ))}
        </ol>
    </div>

  )
}

export default RecipeDisplay;