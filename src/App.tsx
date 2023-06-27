import React, { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";
import Nav from "./Nav";
import Recipes from "./components/Recipes";

interface Hit {
  recipe: {
    image: string;
    label: string;
    healthLabels: string[];
    ingredientLines: string[];
  };
}

interface Hits {
  hits: Hit[];
}

function App(): JSX.Element {
  const [data, setData] = useState<Hits>({ hits: [] });
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response: AxiosResponse = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=f9eb0533&app_key=904f2441c5f9350ef4d7a6f4e606c50b`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="mt-3">
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-column container mx-5"
          style={{ width: "20rem" }}
        >
          <div className="form-group">
            <label htmlFor="search">Search Keyword</label>
            <input
              type="search"
              value={keyword}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setKeyword(event.target.value)
              }
              name="search"
              id="search"
              placeholder="recipe"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary my-2" type="submit">
            Submit
          </button>
        </form>
      </div>

      {loading ? (
        <h1 className="text-center">Loading......</h1>
      ) : (
        <Recipes hits={data.hits} />
      )}
    </>
  );
}

export default App;
