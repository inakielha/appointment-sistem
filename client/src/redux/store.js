import { applyMiddleware, compose,legacy_createStore as createStore } from "redux";
import reducer from './reducer';
import thunk from "redux-thunk";

const composeTask = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeTask(applyMiddleware(thunk)));

export default store;