import {createReducer, on} from "@ngrx/store";
import {
  loadTech,
  describeTech,
  techLoadedSuccess,
  sourceLoadedSuccess,
  techLoadFail
} from "./pages.actions";
import {Blog} from "../model/blog-type";
import {Sources} from "../model/source-type";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Tech} from "../model/tech.model";

export interface combinedState extends EntityState<Tech>{
  showTechDesc: boolean;
  loading: boolean;
  errorMessage: string;
  blogs: Blog[];
  sources: Sources[];
}

export const adapter: EntityAdapter<Tech> = createEntityAdapter<Tech>({});

const initialState: combinedState = adapter.getInitialState({
  showTechDesc: false,
  loading: false,
  blogs: [],
  errorMessage: '',
  sources: []
});

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
    blogs: blogs,
  })),
  on(techLoadFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(sourceLoadedSuccess, (state, { sources }) => ({
    ...state,
    loading: false,
    sources: sources
  }))
);


export const { selectAll, selectEntities } = adapter.getSelectors();

export const selectBlogs = selectAll;
export const selectBlogEntities = selectEntities;
