import {createAction, createReducer, on} from "@ngrx/store";

export interface TechState {
  showTechUsage: boolean;
}

const initialState: TechState = {
  showTechUsage: false
}

export const techUsageReducer= createReducer(
  initialState,
  on(createAction('[Tech Usage] Toggle Show Tech Usage'), (state) => ({
        ...state,
        showTechUsage: !state.showTechUsage,
      })
  ));
