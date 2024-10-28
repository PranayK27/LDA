import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromTech from './pages.reducer';
import {getRouterSelectors} from "@ngrx/router-store";


export const selectTechState =
  createFeatureSelector<fromTech.combinedState>('pages');


export const selectBlogs = createSelector(
  selectTechState,
  fromTech.selectBlogs
);

export const selectBlogsEntities = createSelector(
  selectTechState,
  fromTech.selectBlogEntities
);

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

// without entity state and adapter in the reducer
// export const selectTechBlogById = createSelector(
//   selectRouteParams,
//   selectTechState,
//   ({ id }, { blogs }) =>
//     blogs.find((blog) => blog.id === id)
// );

export const selectTechBlogById= createSelector(
  selectBlogsEntities,
  selectRouteParams,
  ({blogEntities}, { id }) => blogEntities?.blogs.find(i => i.id === id)
);
