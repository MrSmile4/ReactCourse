import './restaurant.css'

export function Menu ({menu, counters, decrement, increment }){

return (
    <>
        <h3 className="blueLabel">Меню:</h3>
        <ul className='textGridWithGap'>
            {menu.map((dish, index) => 
            <>
                <li className='textGrid'>
                    <span>Name: {dish.name}</span>
                    <span>Price: {dish.price}</span>
                    <span>
                    Ingredients: {dish.ingredients.map((ing, i, ingredients) => {
                        return i === ingredients.length - 1 ? ing : ing + ', ';
                    })}
                    </span>
                    <div className='textFlex'>
                        <button onClick={() => decrement(index)}>-</button>
                        {counters[index].count}
                        <button onClick={() => increment(index)}>+</button>
                    </div>
                </li>
            </>)
            }
        </ul>
    </>)
}