import {createAction, props} from "@ngrx/store";
import {Blog} from "../blog/blog-type";
import {Sources} from "../blog/source-type";

export const describeTechActions= createAction('[Describe Tech] Toggle Show Tech Description');

export const loadTechAction= createAction('[Load Tech] Load Tech');

export const techLoadedSuccess= createAction('[Tech Loaded] Tech Loaded', props<{ blogs: Blog[] }>());

export const sourceLoadedSuccess= createAction('[Source Loaded] Source Loaded', props<{ sources: Sources[] }>());
