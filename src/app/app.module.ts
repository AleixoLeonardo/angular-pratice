import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/register/task/task.component';

import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './pages/register/task-list/task-list.component';

import { ToastrModule } from 'ngx-toastr';
import { TaskHistoryComponent } from './pages/operation/task-history/task-history.component';

import { NgxLoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillComponent } from './pages/register/bill/bill.component';
import { BillListComponent } from './pages/register/bill-list/bill-list.component';
import { BillHistoryComponent } from './pages/operation/bill-history/bill-history.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SalaryComponent } from './pages/register/salary/salary.component';
import { SalaryListComponent } from './pages/register/salary-list/salary-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnglishDictonaryComponent } from './pages/register/english-dictonary/english-dictonary.component';
import { EnglishDictonaryListComponent } from './pages/register/english-dictonary-list/english-dictonary-list.component';
import { PhrasesComponent } from './pages/operation/phrases/phrases.component';
import { TimeClockComponent } from './pages/operation/time-clock/time-clock.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    TaskListComponent,
    TaskHistoryComponent,
    BillComponent,
    BillListComponent,
    BillHistoryComponent,
    SalaryComponent,
    SalaryListComponent,
    DashboardComponent,
    EnglishDictonaryComponent,
    EnglishDictonaryListComponent,
    PhrasesComponent,
    TimeClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
