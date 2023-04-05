import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Recipe from "./components/Recipe"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";




function App() {
  const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: "g7wwoqw7k7vb",
    accessToken: "6vacSQq_qoG6HEtSss7ZTCoHm74Sr8yTUUEbOK6PXDY",
  });

  const getData = async () => {
    const entryItems = await client.getEntries();

    console.log("ENTRIES: ", entryItems.items);
    setRecipes(entryItems.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cookingBook" element={<Home
          recipes={recipes}
        />} />
        <Route path="/cookingBook/:index" element={<Recipe 
        recipes={recipes}/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
