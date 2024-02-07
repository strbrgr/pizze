import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./core/store";
import { Theme } from "@radix-ui/themes";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Provider store={store}>
      <main className="bg-gray-900 h-screen">
        <Theme
          accentColor="jade"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
        >
          <Router>{children}</Router>
        </Theme>
      </main>
    </Provider>
  );
}
