import { INIT_APPLICATION_STATE } from '../states/application.state';
import {
    BlogListAction,
    BLOGLIST_ACTIONS
} from '../actions/blog-list.action';

const ACTIONS = [
    BLOGLIST_ACTIONS.GET,
    BLOGLIST_ACTIONS.GET_ERROR,
    BLOGLIST_ACTIONS.GET_SUCCESS,
]
export function blogListReducer(state = INIT_APPLICATION_STATE, action: BlogListAction): BlogListAction {
    if (ACTIONS.includes(action.type)) {
        return action;
    } else {
        return state;
    }
}