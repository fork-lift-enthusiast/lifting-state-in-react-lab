const BurgerStack = (props) => {
    return <ul>
        {props.stack.map((ingredient)=>(
            <li onClick={()=>props.removeFromBurger(ingredient.name)} style= {{backgroundColor: ingredient.color}}>{ingredient.name}</li>
        ))}
     </ul>;
  };
  
  export default BurgerStack;
  