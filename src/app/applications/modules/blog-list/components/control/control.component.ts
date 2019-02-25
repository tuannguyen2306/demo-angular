import { 
  Component, 
  OnInit, 
  OnDestroy 
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BlogListAction, BLOGLIST_ACTIONS } from 'src/app/shared/ngrx/actions/blog-list.action';
import { BlogList } from 'src/app/shared/models/blog-list';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {

  constructor(
    private appStore: Store<BlogListAction>
    ) { }

    private appStoreObs: Observable<BlogListAction>;
    private appStoreSub: Subscription;
    public blogList: {
      pageIndex: number,
      pageSize: number,
      totalCount: number,
      totalPages: number,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
      sources: BlogList[]
    };
    public isLoading: boolean = true;
    public isOpenDetail: boolean = false;
    public blog: BlogList

  ngOnInit() {
    this.appStoreObs = this.appStore.pipe(
      select('bloglist')
    );
    this.appStoreSub = this.appStoreObs.subscribe(
      (actions: BlogListAction) => {
        switch(actions.type){
          case BLOGLIST_ACTIONS.GET: {
            this.isLoading = true;
            break;
          }
          case BLOGLIST_ACTIONS.GET_SUCCESS: {
            this.blogList = actions.payload;
            this.isLoading = false;
            break;
          }
          case BLOGLIST_ACTIONS.GET_ERROR: {
            break;
          }
          // case BLOGLIST_ACTIONS.GET_DETAIL: {
          //   break;
          // }
          // case BLOGLIST_ACTIONS.GET_DETAIL_SUCCESS: {
          //   this.blog = actions.payload;
          //   this.isOpenDetail = true;
          //   break;
          // }
          // case BLOGLIST_ACTIONS.GET_DETAIL_ERROR: {
          //   break;
          // }
        }
      }
    );
  }

  ngOnDestroy() {
    this.appStoreSub.unsubscribe();
  }

}
