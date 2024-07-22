import { useState } from "react";
import { Layout } from "../layout/Layout";
import { ScrollProgressBar } from "../scroll-progress-bar/scroll-progress-bar";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { RestTabButtonsContainer } from "../Restaurant/rest-tab-buttons/rest-tab-buttons-container";
import { RestaurantContainer } from "../Restaurant/restaurant/restaurant-container";

export function App() {
  const [currentRestId, setCurrentRestId] = useState(undefined);

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <div>
            <ScrollProgressBar />
            <Layout>
              <h1>Restaurants list</h1>
              <RestTabButtonsContainer setCurrentRestId={setCurrentRestId} />
              <RestaurantContainer restId={currentRestId} />
            </Layout>
          </div>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}
