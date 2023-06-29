import './App.css'
import Frases from './component/Frases'
import Data from './data/phrases.json'



function App() {
  
  return (
    <>
       <div>
       <h1 className="galleta">Galleta de la Fortuna</h1>
          
           <Frases phrase= {Data}/>
           </div>
    </>
  )
}

export default App

