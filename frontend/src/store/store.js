import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productsReducer } from "../reducers/products/productReducer";
import { userReducer } from "../reducers/users/userReducer";

const reducer = combineReducers({

    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;