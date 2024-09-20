import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Tech} from "./techUsage.reducer";
import {getRouterSelectors} from "@ngrx/router-store";


export const selectTechState =
  createFeatureSelector<Tech>('pages');

export const selectTechDesc = createSelector(
  selectTechState,
  ({ showTechDesc }) => showTechDesc
);

export const selectTechLoading = createSelector(
  selectTechState,
  ({ loading }) => loading
);

export const selectTechBlogs = createSelector(
  selectTechState,
  ({ blogs }) => blogs
);

export const selectTechErrorMessage = createSelector(
  selectTechState,
  ({ errorMessage }) => errorMessage
);

export const selectTechSources = createSelector(
  selectTechState,
  ({ sources }) => sources
);

export const { selectRouteParams } = getRouterSelectors();

export const selectTechBlogById = createSelector(
  selectRouteParams,
  selectTechState,
  ({ id }, { blogs }) =>
    blogs.find((blog) => blog.id === id)
);
