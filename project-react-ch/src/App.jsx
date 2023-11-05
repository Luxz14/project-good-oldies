import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a Good Oldies, la tienda de musica predilecta por los usuarios!'}/>
    </>
  )
}

export default App
