import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Tech} from "./techUsage.reducer";


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

export const selectTechSources = createSelector(
  selectTechState,
  ({ sources }) => sources
);
