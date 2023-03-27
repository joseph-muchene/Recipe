import { useState } from "react"


function Recipe({ hit }: any) {
    const [color, setColor] = useState("")
    function switchColor(index: number | boolean) {
        let color = '';

        if (index === 0) {
            color = 'green';
        } else if (index === 1) {
            color = 'red';
        } else if (index === 3) {
            color = 'violet';
        } else if (index === 4) {
            color = 'black';
        } else if (index === 5) {
            color = 'blue';
        } else if (index === 6) {
            color = 'orange';
        } else {
            color = 'magenta';
        }

        return color;
    }

    return (
        <div><div className="card my-3 flex flex-column justify-content-center" style={{ width: "18rem" }}>
            <img src={hit.recipe?.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{hit.recipe?.label}</h5>
                <div className="d-flex flex-wrap">


                    {hit.recipe?.healthLabels.map((label: any, index: number) => (<span style={{ color: `${switchColor(index)}` }} className="m-1 badge">{label}</span>))}



                </div>
            </div>
            <ul className="list-group list-group-flush">
                {hit.recipe?.ingredientLines?.map((ingredient: any, index: number) => (<li className="list-group-item">
                    <span className="mx-2 text-primary">{index}</span>{ingredient}
                </li>))}

            </ul>
            {/* <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div> */}
        </div></div>
    )
}

export default Recipe