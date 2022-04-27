import React from 'react'

export default function Content(){
  return (
    <div className="content">
       <img id="img-poster" src="https://i.pinimg.com/originals/ac/75/78/ac75782fea27d50eec37928698eba27c.png" alt="poster" width="250px"/>
       <div className="content-info">
         <h1 id="title">I Want To Eat Your Pancreas</h1>
         <p>Original title : Kimi no suizô o tabetai</p>
         <span id="date">2018 . Not Rated . 1h 49m</span>
         <p id="description">A high school student discovers one of his classmates, Sakura Yamauchi, is suffering from a terminal illness. This secret brings the two together, as she lives out her final moments.</p>
         <p id="director"> <b>Director : </b> Shin'ichirô Ushijima</p>
         <button id="play">PLAY</button>
      </div>
       
    </div>
  )
}