import React,{useState,useEffect} from "react";

import './App.css';
import Recipe from "./Components/Recipe";
import Guid from "./Components/guid";

function App() {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")
  const [isShown , setIsShown] = useState(false)

  useEffect(() => {
    const GetRequest = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=8be3e4bd&app_key=f94aa75761b37cda0539f0b06a0f2095`)
      const Data = await response.json()
      setRecipes(Data.hits)
      console.log(Data.hits)
    }
    GetRequest()
  }, [query])


  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch("")
  }

  const showHandler =()=>{
    setIsShown(true)
  }

  return (
      <div className="App">
        {
          recipes.length ?
              <>
                {isShown && <Guid setIsShown={setIsShown}/>}
                <div className="navbar">
                  <form className="search-form" onSubmit={submitHandler}>
                    <input className="search-bar" value={search} onChange={searchHandler} type="text"/>
                    <button className="search-button" type="submit">search</button>
                  </form>
                  <button onClick={showHandler} className="guide">Search Guide</button>
                </div>

                <div className="recipes">
                  {recipes.map(recipe =>
                      <Recipe
                          key={recipe.recipe.label}
                          data={recipe}
                      />)
                  }
                </div>
              </>
              :
              <h1 className="loading">loading...</h1>
        }

      </div>
  );
}
export default App;
