import React, { useState } from "react";

interface RecipeProps {
  hit: {
    recipe: {
      image: string;
      label: string;
      healthLabels: string[];
      ingredientLines: string[];
    };
  };
} 

function Recipe({ hit }: RecipeProps): JSX.Element {
  function switchColor(index: number): string {
    const colors = [
      "green",
      "red",
      "violet",
      "black",
      "blue",
      "orange",
      "magenta",
    ];

    if (index >= 0 && index < colors.length) {
      return colors[index];
    }

    return "";
  }

  return (
    <div>
      <div
        className="card my-3 flex flex-column justify-content-center"
        style={{ width: "18rem" }}
      >
        <img src={hit.recipe.image} className="card-img-top" alt="Recipe" />
        <div className="card-body">
          <h5 className="card-title">{hit.recipe.label}</h5>
          <div className="d-flex flex-wrap">
            {hit.recipe.healthLabels.map((label, index) => (
              <span
                key={index}
                style={{ color: switchColor(index) }}
                className="m-1 badge"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {hit.recipe.ingredientLines.map((ingredient, index) => (
            <li key={index} className="list-group-item">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
