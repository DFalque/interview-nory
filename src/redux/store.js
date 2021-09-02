import { combineReducers, createStore } from "redux";
import { bannerReducer } from "./reducers/bannerReducer";
import { navReducer } from "./reducers/navReducer";

const reducers = combineReducers({
  banner: bannerReducer,
  nav: navReducer,
});

const store = createStore(reducers);

export default store;
