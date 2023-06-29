import { useState } from "react";
import Escritor from "./Escritor";



const Phrase = ( {phrase} )=> {
    const [index, setIndex] = useState(0)
    const contador= () =>{
      setIndex(Math.ceil(Math.random()* phrase.length-1))
      
    }
    const Oracion= [phrase, index]
  
    const imagenes= ['image/fondo1.jpg', 'image/fondo2.jpg','image/fondo3.jpg','image/fondo4.jpg', 'image/fondo1.png','image/fondo2.png','image/fondo3.png','image/fondo4.png', 'image/fondo1.jpg', 'image/fondo2.jpg','image/fondo3.jpg','image/fondo4.jpg', 'image/fondo1.png','image/fondo2.png','image/fondo3.png' ]
    document.body.style= `background: url(${imagenes[index]})`;
    
        return (

     <article>
                       
    <div className="fortuna">
      <p>{phrase[index].phrase}</p>
      <br></br>
      <h2>Autor</h2>
      <Escritor dueño= {Oracion}/>
      <button onClick={contador}>
    <p><i className='bx bxs-right-arrow bx-sm bx-fw'></i>Start</p>
    </button>
    </div>
    </article>
    )
}

export default Phrase;