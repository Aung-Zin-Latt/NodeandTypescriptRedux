import { ActionTypes } from "../constants/action-types";

// Types in Reducers
export interface ReducerTypes {
    type: string,
    payload: object,
  }

const initialState = {
    user: null,
};

export const userReducer = (state = initialState, { type, payload }: ReducerTypes) => {
    switch (type) {
        case ActionTypes.REGISTER_USER:
            return { ...state, user: payload };

        case ActionTypes.LOGIN_USER:
            return { ...state, user: payload };

            case ActionTypes.GET_ALL_USERS:
        return { ...state, user: payload };

        case ActionTypes.UPDATE_USER:
        return { ...state, user: payload };

        case ActionTypes.UPDATE_USER_PROFILE:
        return { ...state, user: payload };

        case ActionTypes.USER_DETAILS:
        return { ...state, user: payload };

        case ActionTypes.DELETE_USER:
        return { ...state, user: payload };

        case ActionTypes.LOGOUT_USER:
            return { ...state, user: null };
    
        default:
            return state;
    }
    console.log(state)
};