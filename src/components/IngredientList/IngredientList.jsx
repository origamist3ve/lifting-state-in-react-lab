// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({availableIngredients, onSubmit }) => {
    return(
        <ul>
            {availableIngredients.map((ingredient, index) => (
                <li style={{ backgroundColor: ingredient.color }} key={index}>
                    {ingredient.name}
                    <button onClick={()=> onSubmit(ingredient)}>+</button>
                </li>
                ))}
        </ul>
    );
};

export default IngredientList;
