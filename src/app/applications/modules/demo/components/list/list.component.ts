import { 
  Component, 
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationAction, EMPLOYEE_ACTIONS } from 'src/app/shared/ngrx/actions/application.action';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(
    private appStore: Store<ApplicationAction>
  ) { }

  @Input() employees: Employee[];
  @Input() isLoading: boolean;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.appStore.dispatch({
      type: EMPLOYEE_ACTIONS.GET
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.employees && this.employees) {
    //   this.paging = this.pagingService.firstLoad(this.employees.length, 5);
    // }
  }

}
