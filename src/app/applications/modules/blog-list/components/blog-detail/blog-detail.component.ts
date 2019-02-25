import { 
  Component, 
  OnInit, 
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { BlogList } from 'src/app/shared/models/blog-list';
import { Store, select } from '@ngrx/store';
import { BlogListAction, BLOGLIST_ACTIONS } from 'src/app/shared/ngrx/actions/blog-list.action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnChanges {

  constructor(
    private appStore: Store<BlogListAction>
  ) { }

  private appStoreObs: Observable<BlogListAction>;
  private appStoreSub: Subscription;

  @Input() blog: BlogList;
  public item: BlogList
  private id: string
  ngOnInit() {
    this.appStoreObs = this.appStore.pipe(
      select('bloglist')
    );
    this.appStoreSub = this.appStoreObs.subscribe(
      (actions: BlogListAction) => {
        switch(actions.type){
          case BLOGLIST_ACTIONS.GET_DETAIL_SUCCESS: {
            console.log(actions.payload)
            this.item = actions.payload;
            break;
          }
        }
      }
    );    
  }
  
  ngAfterViewInit() {
    // console.log(this.blog)
    // this.appStore.dispatch({
    //   type: BLOGLIST_ACTIONS.GET_DETAIL,
    //   payload: this.id
    // })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blog && this.blog) {
      this.blog = this.blog;
    }
  }

}
