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
    public blogList: BlogList[];
    public isLoading: boolean = true;

  ngOnInit() {
    this.appStoreObs = this.appStore.pipe(
      select('bloglist')
    );
    this.appStoreSub = this.appStoreObs.subscribe(
      (actions: BlogListAction) => {
        console.log(actions);
        switch(actions.type){
          case BLOGLIST_ACTIONS.GET: {
            this.isLoading = true;
            break;
          }
          case BLOGLIST_ACTIONS.GET_SUCCESS: {
            console.log(actions.payload)
            this.blogList = [...actions.payload];
            this.isLoading = false;
            break;
          }
          case BLOGLIST_ACTIONS.GET_ERROR: {
            break;
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.appStoreSub.unsubscribe();
  }

}
