import React from 'react'
import { useState } from "react";

const Form = () => {
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