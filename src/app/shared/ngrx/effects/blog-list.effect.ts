import { Injectable } from "@angular/core";
import {
    Actions,
    Effect,
    ofType
} from '@ngrx/effects';
import { Observable } from "rxjs";
import {
    BLOGLIST_ACTIONS,
    BlogListAction
} from "../actions/blog-list.action";
import {
    map,
    mergeMap,
    catchError,
    delay
} from 'rxjs/operators';
import { of } from 'rxjs';
import { BlogListService } from '../../services/blog-list.service';

@Injectable()
export class BlogListEffect {
    constructor(
        private $actions: Actions,
        private blogListService: BlogListService
    ) { }

    @Effect() $getBlogList: Observable<BlogListAction> = this.$actions.pipe(
        ofType(BLOGLIST_ACTIONS.GET),
        mergeMap(
            (actions: BlogListAction) => this.blogListService.getBlogList().pipe(
                map(
                    (response) => ({
                        type: BLOGLIST_ACTIONS.GET_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: BLOGLIST_ACTIONS.GET_ERROR,
                        payload: error
                    })
                )
            )
        )
    );
}