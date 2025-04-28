const IngredientList = (props) => {
    return <ul>
        {props.ingredients.map((ingredient)=>(
            <li onClick={()=> props.addToBurger(ingredient)} style= {{backgroundColor: ingredient.color}}>{ingredient.name}</li>
        ))}
     </ul>;
  };
  
  export default IngredientList;
  