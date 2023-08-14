import React from 'react'

const RecipeDisplay = ({title, image,ingredients}) => {
  
  return (
    <div>
      

      <h1>{title}</h1>
      <img src={image} alt="" />
      <ol>
        
      {ingredients.map(ingredient => (
       <ul> {ingredient.text}</ul>
      ))}
        </ol>




    </div>






  )
}

export default RecipeDisplay;