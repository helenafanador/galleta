import { useState } from "react";

const Escritor = ({dueño}) => {
    const datos= dueño[0]
//console.log(dueño)

    return (

          
       <p>
        {datos[dueño[1]].author}
       </p>
  
    )
}
export default Escritor;