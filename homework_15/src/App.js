import{ useState } from "react";
import{ Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { ThemeContext } from "./contexts/ThemeContext";
import './App.scss';

function App() {
  const[darkTheme, setDarkTheme] = useState(true);

  const toggleTheme =() =>{
    setDarkTheme(prev => !prev);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="app" style={darkTheme ?{background:"black"}:{}}>
        <Header />
        <button className="btnTheme" onClick={toggleTheme}>Toggle Theme</button>
        <ProductList />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
