import axios, { AxiosResponse } from "axios";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './ActioType';
import { Dispatch } from 'redux';
import { API_BASE_URL } from "@/config/apiConfig";

// Define user data type for request body
interface UserRegisterData {
  name: string;
  email: string;
  password: string;
}

interface UserLoginData {
  email: string;
  password: string;
}

// Define the expected response from the API
interface RegisterResponse {
  jwt: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

const token=localStorage.getItem("jwt");
// Action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user: RegisterResponse) => ({
  type: REGISTER_SUCCESS,
  payload: user
});
const registerFailure = (error: string) => ({
  type: REGISTER_FAILURE,
  payload: error
});

// Action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user: RegisterResponse) => ({
  type: LOGIN_SUCCESS,
  payload: user
});
const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error
});

// Action creators
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUSerSuccess = (user: RegisterResponse) => ({
  type: GET_USER_SUCCESS,
  payload: user
});
const getUserFailure = (error: string) => ({
  type: GET_USER_FAILURE,
  payload: error
});

const userLogout=()=>({type:LOGOUT,payload:null});



// Thunk action
export const register = (userRegisterData: UserRegisterData) => async (dispatch: Dispatch) => {
  dispatch(registerRequest());

  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      userRegisterData
    );

    const user = response.data;
    console.log("regidterUser->",user);
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    dispatch(registerSuccess(user));
  } catch (error: any) {
    dispatch(registerFailure(error.message));
  }
};


export const login = (userLoginData: UserLoginData) => async (dispatch: Dispatch) => {
    dispatch(loginRequest());
  
    try {
      const response: AxiosResponse<RegisterResponse> = await axios.post(
        `${API_BASE_URL}/auth/signin`,
        userLoginData
      );
  
      const user = response.data;
      console.log("loginUser->",user);
      if (user.jwt) {
        localStorage.setItem("jwt", user.jwt);
      }
  
      dispatch(loginSuccess(user));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

  export const getUser = (jwt:String) => async (dispatch: Dispatch) => {
    dispatch(getUserRequest());
  
    try {
      const response: AxiosResponse<RegisterResponse> = await axios.get(
        `${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        }
      );
  
      const user = response.data;
      console.log("getUser->",user);
      console.log("getUserName->",user.jwt);
      dispatch(getUSerSuccess(user));
    } catch (error: any) {
      dispatch(getUserFailure(error.message));
    }
  };

  export const logout=()=>(dispatch: Dispatch)=>{
    console.log("jwt");
    dispatch(userLogout());
    localStorage.removeItem("jwt");
  }
  