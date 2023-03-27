import { useState } from 'react'

import axios from 'axios'
import './App.css'

import Nav from './Nav'
import Recipes from './components/Recipes'

function App(): JSX.Element {
  interface Hit {
    recipe: any
  }

  interface Hits {
    hits: Hit[]
  }
  const [count, setCount] = useState(0)
  const [data, setData] = useState<Hits>({ hits: [] });
  const [loading, setLoading] = useState(false)
  const [keyword, setKeyword] = useState("")



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const config = {
      headers: {

        'Access-Control-Allow-Origin': '*',

      }
    }

    const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=f9eb0533&app_key=904f2441c5f9350ef4d7a6f4e606c50b`, config)

    setData(response.data)
    setLoading(false)
  }





  console.log(loading)
  return (
    <>
      <Nav />
      <div className="mt-3">
        <form onSubmit={handleSubmit} className='d-flex justify-content-center flex-column container mx-5 ' style={{ width: "20rem" }}>
          <div className="form-group">
            <label htmlFor="key">search keyword</label>
            <input type="search" value={keyword} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setKeyword(event.currentTarget.value)} name="search" id="search" placeholder='recipe' className='form-control' />
          </div>


          <button className='btn btn-primary my-2' type='submit'>submit</button>

        </form>
      </div>


      {loading ? <h1 className='text-center'>Loading......</h1> : <Recipes hits={data?.hits} />}

    </>
  )
}

export default App
