import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogList } from '../models/blog-list';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {

  constructor(
    private httpClient: HttpClient
    ) { }

    apiURL: string = 'http://localhost:55586/api/blogs';

  getBlogList(): Observable<BlogList[]>{
    return this.httpClient.get<BlogList[]>(this.apiURL);
  }
}
