import React from "react";
import style from "./recipemodule.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1 className={style}>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li> {ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};
export default Recipe;
