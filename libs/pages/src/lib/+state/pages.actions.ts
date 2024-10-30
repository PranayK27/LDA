import {createAction, props} from "@ngrx/store";
import {Blog} from "../model/blog-type";
import {Sources} from "../model/source-type";

export const describeTech= createAction('[Describe Tech] Toggle Show Tech Description');

export const loadTech= createAction('[Load Tech] Loading Tech');

export const techLoadedSuccess= createAction('[Loaded Tech] Tech Loaded Success', props<{ blogs: Blog[] }>());

export const techLoadFail= createAction('[Tech Not Load] Tech Load Fail', props<{ message: string }>());

export const loadSource= createAction('[Load Source] Loading Sources');

export const sourceLoadedSuccess= createAction('[Loaded Source] Sources Loaded Success', props<{ sources: Sources[] }>());

export const sourceLoadFail= createAction('[Source Not Load] Sources Load Fail', props<{ message: string }>());
