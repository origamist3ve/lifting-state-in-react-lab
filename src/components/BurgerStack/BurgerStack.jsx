// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({stack, removeFromBurger}) => {
    console.log(stack)
    return (
        <ul>
            {stack.map((item, index) => (
                <li style={{ backgroundColor: item.color }} key={index}>
                    {item.name}
                    <button onClick={()=> removeFromBurger(item)}>X</button>

                </li>
            ))}
        </ul>
    )
};

export default BurgerStack;
