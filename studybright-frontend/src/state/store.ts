import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./auth/Reducer";
// import { AuthAction } from "./auth/Reducer"; // Import your action type if defined

// Combine all reducers
const rootReducers = combineReducers({
  auth: authReducer,
});

// Infer(anuman karna) the shape of the root state from the combined reducers
// export type RootState = ReturnType<typeof rootReducers>;


// Create the Redux store with thunk middleware
export const store = legacy_createStore(
  rootReducers,
  applyMiddleware(thunk)
);

// ✅ Export types for use throughout app
export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
