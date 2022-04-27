import React from 'react'
import Content from "./Content"

export default function Movie(){
  return (
   
    <div className="page">
        <div className="movie">
            <Content />
        </div>

        <div className="next--back">
          <button  id="buttons">Back</button>
          <button  id="buttons">Next</button>
        </div>
    </div>
  )
}