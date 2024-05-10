import {createAction, createReducer, on} from "@ngrx/store";

export interface TechState {
  ShowTechUsage: boolean;
}

const initialState: TechState = {
  ShowTechUsage: true
}

export const techUsageReducer = createReducer(
  initialState,
  on((createAction('[Tech Usage] Toggle Show Tech Usage'), (state) => ({
    ...state,
      ShowTechUsage: !state.ShowTechUsage,
  }))
  ));
