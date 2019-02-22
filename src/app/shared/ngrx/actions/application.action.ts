import { Action } from "@ngrx/store";

export class ApplicationAction implements Action {
    public readonly type: string;
    public payload?: any;
}

export const EMPLOYEE_ACTIONS = {
    GET: 'EMPLOYEE_ACTIONS_GET',
    GET_SUCCESS: 'EMPLOYEE_ACTIONS_GET_SUCCESS',
    GET_ERROR: 'EMPLOYEE_ACTIONS_GET_ERROR',
    CREATE: 'EMPLOYEE_ACTIONS_CREATE',
    CREATE_SUCCESS: 'EMPLOYEE_ACTIONS_CREATE_SUCCESS',
    CREATE_ERROR: 'EMPLOYEE_ACTIONS_CREATE_ERROR',
    UPDATE: 'EMPLOYEE_ACTIONS_UPDATE',
    UPDATE_SUCCESS: 'EMPLOYEE_ACTIONS_UPDATE_SUCCESS',
    UPDATE_ERROR: 'EMPLOYEE_ACTIONS_UPDATE_ERROR',
    DELETE: 'EMPLOYEE_ACTIONS_DELETE',
    DELETE_SUCCESS: 'EMPLOYEE_ACTIONS_DELETE_SUCCESS',
    DELETE_ERROR: 'EMPLOYEE_ACTIONS_DELETE_ERROR',
    RESET: 'EMPLOYEE_ACTIONS_RESET'
}