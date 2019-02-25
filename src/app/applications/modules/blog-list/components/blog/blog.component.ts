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
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(
    private appStore: Store<BlogListAction>
    ) { }

  @Input() arrBlog: {
    pageIndex: number,
    pageSize: number,
    totalCount: number,
    totalPages: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    sources: BlogList[]
  };
  public listBlog: BlogList[]

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.appStore.dispatch({
      type: BLOGLIST_ACTIONS.GET
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.arrBlog && this.arrBlog) {
      this.listBlog = this.arrBlog.sources;
    }
  }

  onClickBlogDetail(id){
    console.log(id)
    this.appStore.dispatch({
      type: BLOGLIST_ACTIONS.GET_DETAIL,
      payload: id
    });
  }

}
