import {createAction, props} from "@ngrx/store";
import {Blog} from "../model/blog-type";
import {Sources} from "../model/source-type";

export const describeTech= createAction('[Describe Tech] Toggle Show Tech Description');

export const loadTech= createAction('[Load Tech] Load Tech');

export const techLoadedSuccess= createAction('[Tech Loaded] Tech Load Success', props<{ blogs: Blog[] }>());

export const techLoadFail= createAction('[Tech Not Load] Tech Load Fail', props<{ message: string }>());

export const sourceLoadedSuccess= createAction('[Source Loaded] Source Loaded', props<{ sources: Sources[] }>());
