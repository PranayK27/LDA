import {createAction, createReducer, on} from "@ngrx/store";

export interface LoginState {
  showLoginPage: boolean;
}

const initialState: LoginState = {
  showLoginPage: true
}

export const loginReducer = createReducer(
  initialState,
  on((createAction('[Login Page] Toggle Show Login Page'), (state) => ({
    ...state,
    showLoginPage: !state.showLoginPage,
  }))
  ));
