import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import appStore from "../utils/store.js";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <div className="">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};

export default AppLayout;
