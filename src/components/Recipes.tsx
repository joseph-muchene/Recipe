import React from 'react'
import Recipe from './Recipe'

type propInterface = {
    hits: any
}
type Hit = {
    recipe: any
}
function Recipes({ hits }: propInterface) {
    const renderHits = (hit: Hit) => {
        return <Recipe hit={hit} />
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto my-auto">
                    {hits && hits.map(renderHits)}
                </div>
            </div>
        </div>
    )
}

export default Recipes