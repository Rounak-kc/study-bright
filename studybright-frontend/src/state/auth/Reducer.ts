import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
  } from "./ActioType";
  
  // Define the shape of the state
  interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    jwt: string | null;
  }

  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  // Initial state with type
  const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
  };
  
  // Define action type
  interface AuthAction {
    type: string;
    payload?: any; // Replace `any` with a specific type per action for stricter typing
  }
  
  // Reducer function
  export const authReducer = (
    state: AuthState = initialState,
    action: AuthAction
  ): AuthState => {
    switch (action.type) {
      case REGISTER_REQUEST:
      case LOGIN_REQUEST:
      case GET_USER_REQUEST:
        return { ...state, isLoading: true, error: null };
  
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return { ...state, isLoading: false, error: null, jwt: action.payload.jwt,
                    user: action.payload.user,};
  
      case GET_USER_SUCCESS:
        return { ...state, isLoading: false, error: null, user: action.payload };
  
      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
      case GET_USER_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
  
      case LOGOUT:
        return { ...initialState };
  
      default:
        return state;
    }
  };
  