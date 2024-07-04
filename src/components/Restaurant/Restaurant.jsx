import { Menu } from "./Menu"
import { Reviews } from "./Reviews"
import './restaurant.css'

export function Restaurant({rest, counters, increment, decrement}) {
    return(
        <div>
            <h2 className="brownLabel">{rest.name}</h2>
            {rest.menu && rest.menu.length ?
            <Menu
                menu={rest.menu}
                counters={counters}
                decrement={decrement}
                increment={increment}/>
            : <span>Menu is empty</span>
            }
            {rest.reviews && rest.reviews.length ?
            <Reviews
                reviews={rest.reviews}/>
            : <span>Reviews is empty</span>
            }
        </div>
    )
}