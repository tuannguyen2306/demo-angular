import { Action } from "@ngrx/store";

export class BlogListAction implements Action {
    public readonly type: string;
    public payload?: any;
}

export const BLOGLIST_ACTIONS = {
    GET: '[BLOGLIST] BLOGLIST_ACTION_GET',
    GET_SUCCESS: '[BLOGLIST] BLOGLIST_ACTION_GET_SUCCESS',
    GET_ERROR: '[BLOGLIST] BLOGLIST_ACTION_GET_ERROR',
}
