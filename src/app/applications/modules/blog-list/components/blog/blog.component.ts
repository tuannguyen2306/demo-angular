import { 
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogListAction, BLOGLIST_ACTIONS } from 'src/app/shared/ngrx/actions/blog-list.action';
import { BlogList } from 'src/app/shared/models/blog-list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(
    private appStore: Store<BlogListAction>
    ) { }

  @Input() blogList: BlogList[];

  ngOnInit() {
    console.log(this.blogList)
  }

  ngAfterViewInit() {
    this.appStore.dispatch({
      type: BLOGLIST_ACTIONS.GET
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blogList && this.blogList) {
      console.log(this.blogList)
    }
  }

}
