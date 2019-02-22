import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationAction, EMPLOYEE_ACTIONS } from 'src/app/shared/ngrx/actions/application.action';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private appStore: Store<ApplicationAction>
  ) { }

  public employee: Employee;

  ngOnInit() {
    this.employee = {
      empl_id: '',
      empl_name: '',
      account: '',
      phone_number: ''
    }
  }

  executeAdd(){
    this.appStore.dispatch({
      type: EMPLOYEE_ACTIONS.CREATE,
      payload: this.employee
    });
  }

}
