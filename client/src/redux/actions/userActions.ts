import userApis from "../../apis/userApis";

import { ActionTypes } from "../constants/action-types";

import {
    iGetAllUsers,
    iLogin,
    iRegister,
    iRegisterFail,
    iUserDetails,
    iUpdateUserProfile,
    iDelete,
    iLogout
} from '../../datatypes/userDataTypes';

// Getting all user information
export const getAllUsers = 
    () => async (dispatch:(arg: iGetAllUsers) => iGetAllUsers) => {
        const response = await userApis.get(`/alluser`);
        dispatch({ type: ActionTypes.GET_ALL_USERS, payload: response.data });
    }

// User Register
export const registerUser =
    (data: any) => async (dispatch: (arg: iRegister) => iRegister) => {
        try {
            const result = Object.fromEntries(data.entries());
            console.log("The data from register are:", result);

            // Api Call
            const response = await userApis.post(`/register`, result);
            dispatch({ type: ActionTypes.REGISTER_USER, payload: response.data });
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred while Register";
            dispatch({ type: ActionTypes.REGISTER_USER_FAILURE, payload: errorMessage });
        }
    };

// For User Login
export const loginUser = 
    (data: any) =>async (dispatch:(arg: iLogin) => iLogin) => {
        try {
            console.log("User Data from Actions", data)

            const response = await userApis.post(`/login`, data);
            console.log("Response from API: ", response)

            dispatch({ type: ActionTypes.LOGIN_USER, payload: response.data });

            // Saving user data in the localStorage
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));
                dispatch({ type: ActionTypes.LOGIN_USER, payload: response.data })
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred while logging in!";
            dispatch({ type: ActionTypes.LOGIN_USER_FAILURE, payload: errorMessage });
        }
    };

// Logout User
export const logoutUser = () => {
    // localStorage.removeItem("user");
    return {
        type: ActionTypes.LOGOUT_USER,
        payload: null,
      };
};