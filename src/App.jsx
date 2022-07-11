import lista from "./Lista";
import Titulo from "./titulo";

function App(){
  return(
    <div>
      <Titulo/>
      <p>Hola mundo desde react, usando {lista[0]}</p>
    </div>
  )
}

export default App;