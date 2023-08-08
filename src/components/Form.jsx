import React from 'react'
import { useState } from "react";

function Form({recipeSearch}) {
    const [form, setForm] = useState({ // state to hold the data of the form
      searchTerm: "" // initial value of the search term
    })

    const handleChange = (e) => { // e accepts an event ON handles
      console.log(e.target.value)
      setForm({
        ...form,
        searchTerm: e.target.value
      })
    }

  return (
    <div>   <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.searchTerm} onChange={handleChange} />
      <input type="submit" value="submit" />
    </form>
  </div></div>
  )
}

export default Form;