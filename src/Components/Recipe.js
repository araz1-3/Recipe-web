import React from 'react';

const Recipe = ({data}) => {
    return (
        <div className="recipe">
            <img src={data.recipe.image} alt="recipe"/>
            <h1>{data.recipe.label}</h1>
            <p className={`${data.recipe.calories > 1000 ? "red":"green"}`}><span>Calories:</span> {data.recipe.calories.toFixed(2)}</p>
            <ol>
                {
                    data.recipe.ingredients.map(ingredient=>
                        <li>{ingredient.text}</li>)
                }
            </ol>
        </div>
    );
};

export default Recipe;