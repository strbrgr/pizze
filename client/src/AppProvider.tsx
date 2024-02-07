import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./core/store";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}
