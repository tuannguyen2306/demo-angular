import { INIT_BLOG_LIST_STATE } from '../states/application.state';
import {
    BlogListAction,
    BLOGLIST_ACTIONS
} from '../actions/blog-list.action';

const ACTIONS = [
    BLOGLIST_ACTIONS.GET,
    BLOGLIST_ACTIONS.GET_ERROR,
    BLOGLIST_ACTIONS.GET_SUCCESS,
    BLOGLIST_ACTIONS.GET_DETAIL,
    BLOGLIST_ACTIONS.GET_DETAIL_SUCCESS,
    BLOGLIST_ACTIONS.GET_DETAIL_ERROR
]
export function blogListReducer(state = INIT_BLOG_LIST_STATE, action: BlogListAction): BlogListAction {
    switch (action.type) {
        case BLOGLIST_ACTIONS.GET:
            return action
        case BLOGLIST_ACTIONS.GET:
            state.payload = action.payload
            return action
        case BLOGLIST_ACTIONS.GET:
            state.payload = action.payload
            return action
        default: return action
    }
}