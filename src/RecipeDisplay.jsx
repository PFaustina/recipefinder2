import React from 'react'

const RecipeDisplay = ({title, image}) => {
  
  return (
    <div>
      

      <h1>{title}</h1>
      <img src={image} alt="" />
      <ol>ingredients</ol>




    </div>






  )
}

export default RecipeDisplay;