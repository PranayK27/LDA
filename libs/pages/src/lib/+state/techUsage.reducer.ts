import {createReducer, on} from "@ngrx/store";
import {loadTechAction, describeTechActions, techLoadedSuccess, sourceLoadedSuccess} from "./techUsage.actions";
import {Blog} from "../blog/blog-type";
import {Sources} from "../blog/source-type";

export interface TechState {
  showTechDesc: boolean;
  loading: boolean;
  blogs: Blog[];
  sources: Sources[];
}

const initialState: TechState = {
  showTechDesc: false,
  loading: false,
  blogs: [],
  sources: []
}

export const techUsageReducer= createReducer(
  initialState,
  on(describeTechActions, (state) => ({
      ...state,
      showTechDesc: !state.showTechDesc,
    })
  ),
  on(loadTechAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(techLoadedSuccess, (state, { blogs }) => ({
    ...state,
    loading: false,
    blogs,
  })),
  on(sourceLoadedSuccess, (state, { sources }) => ({
    ...state,
    loading: false,
    sources,
  }))
);
