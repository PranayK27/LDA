import {createReducer, on} from "@ngrx/store";
import {
  loadTech,
  describeTech,
  techLoadedSuccess,
  sourceLoadedSuccess,
  techLoadFail
} from "./techUsage.actions";
import {Blog} from "../blog/blog-type";
import {Sources} from "../blog/source-type";

export interface Tech {
  showTechDesc: boolean;
  loading: boolean;
  blogs: Blog[];
  errorMessage: string;
  sources: Sources[];
}

const initialState: Tech = {
  showTechDesc: false,
  loading: false,
  blogs: [],
  errorMessage: '',
  sources: []
}

export const techUsageReducer= createReducer(
  initialState,
  on(describeTech, (state) => ({
      ...state,
      showTechDesc: !state.showTechDesc,
    })
  ),
  on(loadTech, (state) => ({
    ...state,
    loading: true,
    blogs: [],
    errorMessage: '',
  })),
  on(techLoadedSuccess, (state, { blogs }) => ({
    ...state,
    loading: false,
    blogs,
  })),
  on(techLoadFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(sourceLoadedSuccess, (state, { sources }) => ({
    ...state,
    loading: false,
    sources,
  }))
);
