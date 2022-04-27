import React from 'react'
import Content from "./Content"

export default function Movie(){
  return (
   
    <div>
        <div className="movie">
            <Content />
        </div>

        <div>
          <button  id="buttons">Back</button>
          <button  id="buttons">Next</button>
        </div>
    </div>
  )
}