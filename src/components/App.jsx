import { Layout } from "./Layout";
import { Restaurant } from "./Restaurant/Restaurant";
import { restaurants } from "../../materials/mock";
import { useState } from "react";
import "./layout.css";

function App() {
  const [currentRest, setCurrentRest] = useState(
    restaurants.length ? restaurants[0] : null
  );

  function changeRest(id) {
    const rest = restaurants.find((restaurant) => restaurant.id === id);
    setCurrentRest(rest);
  }

  return (
    <div>
      <Layout>
        <h1>Restaurants list</h1>
        <div className="restaurantButtons">
          {restaurants.map((restaurant) => (
            <button
              key={restaurant.id}
              onClick={() => changeRest(restaurant.id)}>
              {restaurant.name}
            </button>
          ))}
        </div>
        <Restaurant
          key={currentRest.id}
          rest={currentRest}
        />
      </Layout>
    </div>
  );
}

export default App;
