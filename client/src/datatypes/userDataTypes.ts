export interface UserActions {
    FETCH_PRODUCTS: string,
    SET_PRODUCTS: string,
    SELECTED_PRODUCT: string,
    REMOVE_SELECTED_PRODUCT: string,

    GET_ALL_USERS: string;
    LOGIN_USER: string;
    LOGIN_USER_FAILURE: string;
    REGISTER_USER: string;
    REGISTER_USER_FAILURE: string;
    USER_DETAILS:  string;
    UPDATE_USER: string;
    UPDATE_USER_PROFILE: string;
    DELETE_USER: string;
    LOGOUT_USER:  string;
  }
  
  export interface iGetAllUsers {
    type: UserActions["GET_ALL_USERS"];
    payload: object;
  }
  
  export interface iLogin {
    type: UserActions["LOGIN_USER"];
    payload: object | string;
  }
  
  export interface iRegister {
    type: UserActions["REGISTER_USER"];
    payload: object | string;
  }

  export interface iRegisterFail {
    type: UserActions["REGISTER_USER_FAILURE"];
    payload: object;
  }
  
  export interface iUserDetails {
    type: UserActions["USER_DETAILS"];
    payload: object;
  }
  
  export interface iUpdateUserData {
    type: UserActions["UPDATE_USER"];
    payload: object;
  }
  
  export interface iUpdateUserProfile {
    type: UserActions["UPDATE_USER_PROFILE"];
    payload: object;
  }
  
  export interface iDelete {
    type: UserActions["DELETE_USER"];
    payload: object;
  }
  
  export interface iLogout {
    type: UserActions["LOGOUT_USER"];
    payload: object;
  }
  
  // State data type
  export interface StateDataType {
    user: StateItems;
  }
  
  type StateItems = {
    user: User | null
  };
  
  type User = {
    login: boolean;
    _id: string;
    username: string;
    email: string;
    token: string;
  };

