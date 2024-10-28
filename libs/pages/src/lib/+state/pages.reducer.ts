import {createReducer, on} from "@ngrx/store";
import {
  loadTech,
  describeTech,
  techLoadedSuccess,
  sourceLoadedSuccess,
  techLoadFail
} from "./pages.actions";
import {Blog} from "../blog/blog-type";
import {Sources} from "../blog/source-type";
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";

export interface Tech {
  showTechDesc: boolean;
  loading: boolean;
  errorMessage: string;
  blogs: Blog[];
  sources: Sources[];
}

// export interface combinedState extends EntityAdapter<Tech>{
//   showTechDesc: boolean;
//   loading: boolean;
//   errorMessage: string;
//   blogs: Blog[];
//   sources: Sources[];
// }
//
// export const adapter: EntityAdapter<Tech> = createEntityAdapter<Tech>({});

// const initialState= adapter.getInitialState({
//   showTechDesc: false,
//   loading: false,
//   blogs: [],
//   errorMessage: '',
//   sources: []
// });

const initialState: Tech = {
  showTechDesc: false,
  loading: false,
  blogs: [],
  errorMessage: '',
  sources: []
}

export const pagesReducer= createReducer(
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
    sources
  }))
);
