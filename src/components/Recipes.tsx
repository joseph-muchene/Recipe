import React from "react";
import Recipe from "./Recipe";

interface Hit {
  recipe: {
    image: string;
    label: string;
    healthLabels: string[];
    ingredientLines: string[];
  };
}

interface Props {
  hits: Hit[];
}

function Recipes({ hits }: Props): JSX.Element {
  const renderHits = (hit: Hit, index: number): JSX.Element => {
    return <Recipe key={index} hit={hit} />;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto my-auto">{hits.map(renderHits)}</div>
      </div>
    </div>
  );
}

export default Recipes;
