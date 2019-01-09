import { NgModule } from '@angular/core';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'employee/editor', component: EmployeeFormComponent },
      { path: 'employee/editor/:id', component: EmployeeFormComponent }
    ])
  ],
  declarations: [EmployeeFormComponent]
})
export class EmployeesModule { }
