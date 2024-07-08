import { Menu } from "./Menu";
import { Reviews } from "./Reviews";
import "./restaurant.css";

export function Restaurant({ rest }) {
  return (
    <div>
      <h2 className="brownLabel">{rest.name}</h2>
      {rest.menu?.length ? (
        <Menu menu={rest.menu} />
      ) : (
        <span>Menu is empty</span>
      )}
      {rest.reviews?.length ? (
        <Reviews reviews={rest.reviews} />
      ) : (
        <span>Reviews is empty</span>
      )}
    </div>
  );
}
