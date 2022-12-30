
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";
import "./styles.css"

function App() {


  
  return (
    <div className="container">
      <Navbar brand="Pokemon App "  />
      <Search/>
      <Pokemon />
    </div>
  );
}

export default App;
