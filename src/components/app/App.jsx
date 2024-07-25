import { Layout } from "../layout/Layout";
import { ScrollProgressBar } from "../scroll-progress-bar/scroll-progress-bar";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { RestTabsContainer } from "../Restaurant/rest-tab-buttons/rest-tabs-container";

export function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <div>
            <ScrollProgressBar />
            <Layout>
              <h1>Restaurants list</h1>
              <RestTabsContainer />
            </Layout>
          </div>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}
